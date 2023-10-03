import {Button, Card, Container} from "react-bootstrap";
import {FormatPrice} from "../utils/priceFormat.ts";
import {UseShoppingContext} from "../context/pdoductProviderContext.tsx";

type dataProps={
    description : string
    id : number
    image : string
    category : string
    price : number
    rating : object
    title : string
}

export function ItemDetail({id,description,category, image, price, title} : dataProps){
    const {
        getCartItem,
        increaseCartItem,
        decreaseCartItem,
        removeFromCart
    }= UseShoppingContext()
    const quantity = getCartItem(id)
    return (
        <Container>
            <Card className="w-100  p-4">
                <Card.Title className="d-flex flex-column  align-items-start mb-4" >
                    <span className="text-muted  fs-5 mt-2" > {category}</span>
                    {title}

                </Card.Title>
                <Card.Body >
                    <div className="d-flex  align-items-center mb-5">
                        <img
                            src={image}
                            height="600px"
                            width="600px"
                            style={{objectFit:"cover", aspectRatio:"1:1"}}
                        />
                        <div className="d-flex flex-column justify-content-center  m-5">
                            <span className="fw-bold fs-4 align-items-start">{FormatPrice(price)}</span>
                            {description}
                        </div>
                    </div>
                    {quantity === 0?
                    <Button className="w-100" onClick={()=>{increaseCartItem(id)}}>+ Add to cart</Button> :
                    <div className="d-flex align-items-center flex-column" style={{gap :".5rem"}}>
                        <div className="d-flex justify-content-center align-items-center"  style={{gap :".5rem"}}>
                            <Button onClick={()=>{increaseCartItem(id)}}>+</Button>
                            <div>
                                <span className="fs-4">{quantity}</span> in cart
                            </div>
                            <Button onClick={()=>{decreaseCartItem(id)}}>-</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={()=>{removeFromCart(id)}}>Remove</Button>
                    </div>}
                </Card.Body>
            </Card>
        </Container>
    )
}