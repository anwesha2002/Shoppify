import {useEffect, useState} from "react";

export function useLocalStorage<T>(key : string, initialvalue : T | (()=>T)){
    const [value, setvalue] = useState<T>(()=>{
        const jsonvalue =  localStorage.getItem(key)
        if(jsonvalue != null) return JSON.parse(jsonvalue)

        if(typeof initialvalue === "function") {
            return (initialvalue as () => T)()
        }
        else {
            return initialvalue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setvalue] as [typeof value , typeof setvalue]
}