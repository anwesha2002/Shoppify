import { useGetApi} from "../data/api.tsx";
import { Col,  Row} from "react-bootstrap";
import {StoreItem} from "../components/storeitem.tsx";

type dataProps={
    description : string
    id : number
    image : string
    category : string
    price : number
    rating : {rate : number, count : number}
    title : string
}

export function Store(){
    const [data, loading, error]  = useGetApi<dataProps[]>("https://fakestoreapi.com/products", []);

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