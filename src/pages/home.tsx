import {useGetApi} from "../data/api.tsx";
import {Card, Col, Row} from "react-bootstrap";

type dataProps={
    description : string
    id : number
    image : string
    category : string
    price : number
    rating : object
    title : string
}

export function Home(){
    const [data, loading, error]  = useGetApi<dataProps[]>("https://fakestoreapi.com/products", []);

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>error</h1>
    return(
        <>
            <Row md={2} lg={3} xs={1} className="g-4">
                {data.map(item =>(
                    <Col >
                        <Card className="h-100 p-4">
                            <Card.Title className="d-flex flex-column">
                                <span className="fs-6 text-muted" >{item.category}</span>
                                {item.title}
                            </Card.Title>
                            <Card.Body>
                                <Card.Img
                                    src={item.image}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>


    )
}