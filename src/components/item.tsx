import {useLocation} from "react-router-dom";
import {useGetApi} from "../data/api.tsx";
import {ItemDetail} from "./itemdetail.tsx";


type dataProps={
    description : string
    id : number
    image : string
    category : string
    price : number
    rating : object
    title : string
}
export function Item(){
    const location = useLocation()
    const id = location.state
    console.log("about",id.uid)
    const [data, loading, error]  = useGetApi<dataProps[]>(`https://fakestoreapi.com/products/${id.uid}`, []);
    console.log("data",data)

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>error</h1>
    return(
        <>
            <ItemDetail {...data}/>
        </>

    )
}