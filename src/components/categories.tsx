import {useLocation} from "react-router-dom";
import {useGetApi} from "../data/api.tsx";
import {Col, Row} from "react-bootstrap";
import {StoreItem} from "./storeitem.tsx";

type dataProps={
    description : string
    id : number
    image : string
    category : string
    price : number
    rating : object
    title : string
}

export function Categories(){
    const location = useLocation()
    const category = location.state.cat
    console.log( category)
    const [data, loading, error] = useGetApi<dataProps[]>(`https://fakestoreapi.com/products/category/${category}`,[])
    console.log("data",data)
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>error</h1>
    return(
        <>
            <Row md={2} lg={3} xs={1} className="g-4">
                {data.map(item =>(
                    <Col key={item.id}><StoreItem {...item}/></Col>
                ))}
            </Row>
        </>
    )
}