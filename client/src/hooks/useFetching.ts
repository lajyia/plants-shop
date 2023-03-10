import { useState } from "react";


export const useFetching = (callback: () => any) =>{
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const fetching = async () =>{
        try{
            setIsLoading(true);
            await callback()
        }catch(e: any){
            setError(e.message);
        }

        finally{
            setIsLoading(false);
        }
    }


    return [fetching, isLoading, error];
}