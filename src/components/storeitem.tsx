import {Button, Card, Image} from "react-bootstrap";
import {FormatPrice} from "../utils/priceFormat.ts";
import { useNavigate} from "react-router-dom";
import {UseShoppingContext} from "../context/pdoductProviderContext.tsx";
type dataProps={
    description : string
    id : number
    image : string
    category : string
    price : number
    rating : {rate : number, count : number}
    title : string
}


export function StoreItem({ description , id, image, price, rating, title} : dataProps){

    const {getCartItem,
        increaseCartItem,
        decreaseCartItem,
        removeFromCart
    } = UseShoppingContext()
    const quantity = getCartItem(id)
    const navigate  = useNavigate()
    function itemdetail(id: number){
        navigate("/item",{state:{uid : id}})
    }

    return (
        <Card  className="h-100 p-2" style={{textDecoration: "none"}}>
            <Card.Title className="d-flex flex-column  align-items-start mb-4" >
                {title}
                <span className="text-muted  fs-6 mt-2" >&#x2B50; {rating.rate} ({rating.count})</span>
            </Card.Title>
            <Card.Body className="d-flex flex-column justify-content-around ">
            <Image
                src={image}
                height="300px"
                width="300px"
            />
                <div className="d-flex flex-column justify-content-center mt-3 mb-3">
                    <span className="fw-bold fs-4 align-items-start">{FormatPrice(price)}</span>
                    {description}
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <Button onClick={()=>itemdetail(id)}  variant="outline-dark">Visit</Button>
                    <div className="d-flex flex-column justify-content-center">
                        <div className="mb-2" style={{gap :".5rem"}}>
                            <Button variant="outline-primary" onClick={()=>{increaseCartItem(id)}}>+</Button>
                            {quantity > 0 ?
                                <span className="fs-4">{quantity}</span>
                                : null
                            }
                            <Button variant="outline-primary" onClick={()=>{decreaseCartItem(id)}}>-</Button>
                        </div>
                        <Button variant="outline-danger" size="sm" onClick={()=>{removeFromCart(id)}}>remove</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}