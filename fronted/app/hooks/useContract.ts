'use client'
import { useState } from "react";
import { createTransaction } from "../utils/transaction";
import toast from "react-hot-toast";
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';

// use getFullnodeUrl to define Devnet RPC location
const rpcUrl = getFullnodeUrl('testnet');

// create a client connected to devnet
const client = new SuiClient({ url: rpcUrl });

const secretKey = process.env.NEXT_PUBLIC_PRIVATEKEY;
const keypair = Ed25519Keypair.fromSecretKey(secretKey!);

const isSynced = localStorage.getItem('syncResult');
const isClaimed= localStorage.getItem('claimResult');

export default function useContract() {

    const [syncResult, setSyncResult] = useState('');
    const [claimResult, setClaimResult] = useState('');

    const handleSync = async (addresses: string[]) => {
        if (isSynced === 'true'){
            toast.error("You have already synced");
            return;
        }
        const tx = createTransaction("sync", addresses);
        const result = await client.signAndExecuteTransaction(
            { transaction: tx, signer: keypair },
        )
        await client.waitForTransaction({ digest: result.digest });
        if (result.digest) {
            toast.success("Sync successfully");
            setSyncResult(result.digest)
            localStorage.setItem("syncResult", 'true')
            console.log(result.digest)
        }
    }

    const handleClaim = async (address: string) => {
        if (isClaimed === 'true'){
            toast.error("You have already claimed");
            return;
        }
        const tx = createTransaction("claim", [], address);
        const result = await client.signAndExecuteTransaction(
            { transaction: tx, signer: keypair },
        )
        if (result.digest) {
            toast.success("Claim successfully,you can check your wallet");
            setClaimResult(result.digest)
            localStorage.setItem("claimResult", 'true')
            console.log(result.digest)
        }


    }

    return { handleSync, handleClaim, syncResult, claimResult };
}