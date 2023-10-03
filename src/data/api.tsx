import {useEffect, useState} from "react";
import axios from "axios";

export function useGetApi<T,>(url : string, initialState : T  | (()=> T) ){
    const [data, setData] = useState<T>(initialState)
    //const [loading, setLoading] = useState<T>(false)
    //const [error, setError] = useState(initialState)
    useEffect(() => {
        async function loadData() {
            try {
                const response = await axios.get(url)
                setData(response.data)
            }catch (err ) {
                console.log(err)
            }
           /* const response = await axios.get(url).then((res)=>{
            setData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            setError(err)
        })*/
        }
        loadData()
    }, [url]);
    return [data]
}


