import { useSignAndExecuteTransaction, useSuiClient } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { bcs } from '@mysten/sui/bcs';
// import { useNetworkVariable } from "./networkConfig";

const CONTRACT_ADDRESS =
    "0x234b1fd0ee7d8ca394fde10c87fb71cc28a04ec7cdbbf3fca608e8ea0d3e27bb";

const Sync = `${CONTRACT_ADDRESS}::ape_on_sui::add_to_whitelist`;
const Claim = `${CONTRACT_ADDRESS}::ape_on_sui::claim`;
const adminCap = '0xb975fe1a3df59114c091d54f17e9c56f3dbab1d827a6ecf494bd54756ab4055a'
const storage = '0x27e2b8309f361c63b763eac3f95740a60f9d4f59704f2fe7b7336f2c8e23a0e1'
const treasuryCap = '0x7ec54c333bc67c4c8f7c55070ef7fcd27208522be651717c2c60512c9d7b20c7'
export function createTransaction(
    method: "sync" | "claim",
    addresses?: string[],
    address?:string
) {
    const tx = new Transaction();
    const args:any[] = [];

    if (method === "sync") {
        // 添加转换成sui数据格式的参数
        args.push(tx.object(adminCap))
        args.push(tx.object(storage))
        args.push(tx.pure("vector<address>", addresses || []))

        tx.moveCall({
            target: Sync,
            arguments: args,
            
        });
    } else if (method === "claim") {
        args.push(tx.object(treasuryCap))
        args.push(bcs.Address.serialize(address!))
        args.push(tx.object(storage))
        tx.moveCall({
            target: Claim,
            arguments: args,
        });
    }



    return tx;
}
