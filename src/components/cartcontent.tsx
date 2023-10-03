import {Offcanvas, Stack} from "react-bootstrap";
import {UseShoppingContext} from "../context/pdoductProviderContext.tsx";
import {CartItem} from "./cartItem.tsx";


type CartContentProps = {
    isOpen : boolean
}

export function CartContent({isOpen} : CartContentProps){
    const { closeCart, cartItem }= UseShoppingContext()
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