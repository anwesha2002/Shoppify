import {Offcanvas, Stack} from "react-bootstrap";
import {UseShoppingContext} from "../context/pdoductProviderContext.tsx";
import {CartItem} from "./cartItem.tsx";
import {FormatPrice} from "../utils/priceFormat.ts";
import {useGetApi} from "../data/api.tsx";

type dataProps = {
    description : string
    id : number
    image : string
    category : string
    price : number
    rating : object
    title : string
}

export function CartContent({isOpen}){
    const [data, loading, error]  = useGetApi<dataProps[]>("https://fakestoreapi.com/products", [])
    const { closeCart, cartItem }= UseShoppingContext()
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>error</h1>

    return (
        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItem.map(item=> (
                        <CartItem {...item} />
                    ))}

                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}