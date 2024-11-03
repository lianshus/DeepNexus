module ape_on_sui::ape_on_sui {
    use sui::url;
    use sui::coin::{Self, TreasuryCap};
    use sui::vec_set::{Self, VecSet};

    /// The MEME token type
    public struct APE_ON_SUI has drop {}

    /// Capability for managing whitelist and claims
    public struct AdminCap has key,store {
        id: UID
    }

    /// Stores whitelist and claim info
    public struct WhitelistStorage has key,store {
        id: UID,
        whitelist: VecSet<address>,
        claim_amount: u64,
        claimed: VecSet<address>
    }

    // Errors
    const EAlreadyClaimed: u64 = 1;
    const ENotWhitelisted: u64 = 2;

    fun init(witness: APE_ON_SUI, ctx: &mut TxContext) {
        // Create the currency
        let (treasury, metadata) = coin::create_currency(
            witness,
            9, // decimals
            b"AOS",
            b"Ape on Sui",
            b"This is a meme coin specifically created for BAYC holders. Any BAYC holder can claim AOS (Ape on SUI) meme coins after verifying their wallet address through DEEPSYNC.",
            option::some(url::new_unsafe_from_bytes(b"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqijLuRizgSKTumBk9jD5JH8zhKXKN4otUJg&s")),
            ctx
        );

        // Create admin capability
        let admin_cap = AdminCap {
            id: object::new(ctx)
        };

        // Create whitelist storage
        let whitelist_storage = WhitelistStorage {
            id: object::new(ctx),
            whitelist: vec_set::empty(),
            claim_amount: 1000 * 1000000000, // 1000 tokens with 9 decimals
            claimed: vec_set::empty()
        };

        // Transfer objects to sender
        transfer::public_transfer(treasury, tx_context::sender(ctx));
        transfer::public_share_object(metadata);
        transfer::public_transfer(admin_cap, tx_context::sender(ctx));
        transfer::public_share_object(whitelist_storage);
    }

    /// Add addresses to whitelist (admin only)
    public entry fun add_to_whitelist(
        _: &AdminCap,
        storage: &mut WhitelistStorage,
        addresses: vector<address>
    ) {
        let mut i = 0;
        while (i < vector::length(&addresses)) {
            let addr = *vector::borrow(&addresses, i);
            if (!vec_set::contains(&storage.whitelist, &addr)) {
                vec_set::insert(&mut storage.whitelist, addr);
            };
            i = i + 1;
        }
    }

    /// Claim tokens if whitelisted
    public entry fun claim(
        treasury_cap: &mut TreasuryCap<APE_ON_SUI>,
        sender: address,
        storage: &mut WhitelistStorage,
        ctx: &mut TxContext
    ) {
        
        // Check if whitelisted
        assert!(vec_set::contains(&storage.whitelist, &sender), ENotWhitelisted);
        
        // Check if already claimed
        assert!(!vec_set::contains(&storage.claimed, &sender), EAlreadyClaimed);

        // Mint tokens
        let coins = coin::mint(treasury_cap, storage.claim_amount, ctx);
        
        // Mark as claimed
        vec_set::insert(&mut storage.claimed, sender);
        
        // Transfer tokens to sender
        transfer::public_transfer(coins, sender);
    }
}