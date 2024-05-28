import { PREFIX_STORAGE } from "@/constants";
import { CartItem } from "@/interfaces/cart";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface Store {
    cart: CartItem[]
    totalItems:number
    total:number
    isDisplaying:boolean
    add:(product:CartItem) => void
    clear:()=>void
    remove:(id:number) => void
    increase:(id:number) => void
    decrease:(id:number) => void
    refresh:()=>void
    toggleDisplayingCart:()=> void
}

export const useCartStore = create<Store>()
(
    persist(
        (set, get) => {
            return{
                cart:[] ,
                totalItems:0,
                total:0,
                isDisplaying:false,
                refresh:()=>{
                    const { cart } = get()
                    const totalItems = cart.reduce( (accumulator, currentValue) => accumulator + currentValue.quantity, 0 )
                    const total = cart.reduce( (accumulator, currentValue) => accumulator + currentValue.price, 0 )
                    set({totalItems})
                    set({total})
                },
                add:(product:CartItem) => {
                    const { cart,refresh } = get()
                    const copy = structuredClone(cart)
                    const index = copy.findIndex(p => p.id === product.id)

                    // * If exists
                    if(index>=0){
                       copy[index].quantity = (copy[index].quantity+1)
                    }else{
                        // * is not
                        copy.push(product)
                    }

                    set({cart:copy})
                    refresh()
                },
                clear:()=>{
                    set({cart:[]})
                },
                remove:(id:number) => {
                    const { cart,refresh } = get()
                    const newCart = cart.filter(p => p.id !== id)
                    set({cart:newCart})
                    refresh()
                },
                increase:(id:number) => {
                    const { cart,refresh } = get()
                    const copy = structuredClone(cart)
                    const index = copy.findIndex(p => p.id === id)

                    if(index){
                       copy[index].quantity = (copy[index].quantity+1)
                    }
                    set({cart:copy})
                    refresh()
                },
                decrease:(id:number) => {
                    const { cart, remove, refresh } = get()
                    const copy = structuredClone(cart)
                    const index = copy.findIndex(p => p.id === id)

                    if(index){
                        if(copy[index].quantity>0){
                            copy[index].quantity = (copy[index].quantity-1)
                        }else{
                            remove(id)
                            return
                        }
                    }
                    set({cart:copy})
                    refresh()
                },
                toggleDisplayingCart:() =>{
                    const { isDisplaying } = get()
                    set({isDisplaying:!isDisplaying})
                }
            }
        },{
            name: `${PREFIX_STORAGE}::CART`
        }
    )
)
