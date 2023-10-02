/*import {useState} from "react";

type dataProps={
    description : string
    id : number
    image : string
    category : string
    price : number
    rating : object
    title : string
}

export function useCatItem<T,>(prop : string, data : dataProps[], initialState : T ){
    const [catitem, setCatItem] = useState<T[]>(initialState)

        {data.map(item => (
            (item.category === prop)?  setCatItem(item) : null
        ))}

    return catitem
}*/