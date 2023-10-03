import {useEffect, useState} from "react";
import axios from "axios";
export function useGetApi<T>(url : string, initialState : T | (()=> T)){
    const [data, setData] = useState<T>(initialState)
    const [loading, setLoading] = useState<T>(false)
    const [error, setError] = useState<T>(null)
    useEffect(() => {
        setLoading(true)
        axios.get(url).then((res)=>{
            setData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }, [url]);
    return [data,loading, error]
}


