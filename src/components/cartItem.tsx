import {Button,  Stack} from "react-bootstrap";
import {useGetApi} from "../data/api.tsx";
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
type CartItemProps ={
    id : number
    quantity : number
}


export function CartItem({id, quantity} : CartItemProps){
    const [data] = useGetApi<dataProps[]>("https://fakestoreapi.com/products", [])
    const {removeFromCart} = UseShoppingContext()
    console.log("data", data)
    console.log("id", id)
    const item = data.find(item=> item.id === id)
    if (item == null) return null
    else {
        return (
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <img
                    src={item.image}
                    style={{
                        height: "100px",
                        width: "100px",
                        aspectRatio: "1:1"

                    }}
                />
                <div className="me-auto">
                    <div>
                        {item.title}
                        {quantity > 1 &&
                            <span style={{fontSize:".65rem"}} className="text-muted m-1">x {quantity}</span>
                        }
                    </div>
                    <div style={{fontSize: ".75rem"}} className="text-muted">{FormatPrice(item.price)}</div>
                </div>
                <div>{FormatPrice(item.price* quantity)}</div>
                <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(id)}>&times;</Button>
            </Stack>
        )
    }


}