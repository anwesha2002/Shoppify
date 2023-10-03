import {createContext, ReactNode, useContext, useState} from "react";
import {CartContent} from "../components/cartcontent.tsx";
import {useLocalStorage} from "../hooks/useLocalStorage.tsx";

type ShoppingCartProviderProps ={
    children : ReactNode
}

type cartItems = {
    id : number
    quantity : number
}
type shoppingcart = {
    getCartItem: (id : number) =>number
    increaseCartItem : (id:number) => void
    decreaseCartItem : (id:number) => void
    removeFromCart : (id : number) => void
    cartItem : cartItems[]
    cartQuntity : number
    openCart : () => void
    closeCart : () => void
}

const shoppingcartcontext = createContext({} as shoppingcart)
export function UseShoppingContext(){
    return useContext(shoppingcartcontext)
}

export function ShoppingCartProvider({children} : ShoppingCartProviderProps){
    const [cartItem, setCartItem] = useLocalStorage<cartItems[]>("shopping cart",[])
    const [isOpen , setIsOpen] = useState(false)

    function getCartItem(id : number){
        return cartItem.find(item => item.id === id)?.quantity || 0
    }
    function increaseCartItem(id: number){
        setCartItem(currItem => {
            if(currItem.find(item=>item.id === id)== null){
                return [...cartItem, {id , quantity : 1}]
            }else{
                return cartItem.map(item => {
                    if(item.id === id){
                        return {...item , quantity : item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartItem(id:number){
        setCartItem(curitem =>{
            if(curitem.find(item => item.id===id)?.quantity==1){
                return cartItem.filter(item=>item.id !== id)
            }else{
                return cartItem.map(item=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id :  number) {
         setCartItem(cartItem.filter(item => item.id !== id))
    }

    const cartQuntity = cartItem.reduce((quantity , item)=>
        item.quantity + quantity, 0
    )

    function openCart(){
        setIsOpen(true)
    }

    function closeCart(){
        setIsOpen(false)
    }



    return(
        <shoppingcartcontext.Provider value={{getCartItem ,
            increaseCartItem,
            decreaseCartItem,
            cartItem,
            removeFromCart,
            cartQuntity,
            openCart,
            closeCart
        }}>
            <CartContent isOpen={isOpen}/>
            {children}
        </shoppingcartcontext.Provider>
    )
}