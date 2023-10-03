import {Badge, Button, Container, Nav, Navbar as NavBarbs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {UseShoppingContext} from "../context/pdoductProviderContext.tsx";

export function Navbar(){
    const {cartQuntity, openCart} = UseShoppingContext()
    return(
        <NavBarbs sticky="top" className="bg-white shadow-sm m-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/category" as={NavLink}>Category</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                </Nav>
                { cartQuntity > 0 ?
                    <Button onClick={openCart} className="rounded-pill" variant="outline-primary">
                        Cart<Badge className="rounded-circle m-1" bg="danger">{cartQuntity}</Badge>
                    </Button> : null
                }
            </Container>
        </NavBarbs>
        )
}