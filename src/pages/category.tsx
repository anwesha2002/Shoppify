import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Store} from "./store.tsx";

export function Category(){
    const navlink = useNavigate()

    function category(cat : string){
        navlink("/categoryItem" , {state:{cat : cat}})
    }

    return (
        <>
            <Container >
                <div>
                    <Button onClick={()=>category("men's clothing")} className="m-3" variant="outline-dark">Men's Clothing</Button>
                    <Button onClick={()=>category("women's clothing")} className="m-3" variant="outline-dark">Women's Clothing</Button>
                    <Button onClick={()=>category("electronics")} className="m-3" variant="outline-dark">Electronics</Button>
                    <Button onClick={()=>category("jewelery")} className="m-3" variant="outline-dark">Jewelery</Button>
                </div>
                <div>
                    <Store/>
                </div>
            </Container>
        </>
    )
}

