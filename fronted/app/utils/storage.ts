
import toast from "react-hot-toast";
export default async function storeAddressesOnWalrus(address:`0x${string}`,suiAccount:string):Promise<void> {
  const basePublisherUrl = "https://publisher.walrus-testnet.walrus.space";
  const numEpochs = 1;
  const addresses = {
    evmAddress: address,
    suiAddress: suiAccount,
  };
  const a = toast.loading('Waiting for binding ...');

  try {
    const response = await fetch(`${basePublisherUrl}/v1/store?epochs=${numEpochs}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addresses),
    });

    if (response.ok) {
      const result = await response.json();
      let blobObject;
      if(result.newlyCreated){
        
        toast.success("Addresses binded successfully!",{id:a});
        blobObject = result.newlyCreated.blobObject;
      }else{
        toast.error("You have already stored this address!",{id:a});
        blobObject = result.alreadyCertified;
      }
      console.log("Blob Object:", blobObject);
      return blobObject;
    } else {
      throw new Error("Failed to store addresses");
    }
  } catch (error) {
    console.error("Error storing addresses:", error);
  }
};