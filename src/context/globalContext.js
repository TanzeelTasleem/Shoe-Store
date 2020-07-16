import React,{createContext,useReducer}  from 'react'
import {shoeReducer} from './reducers'
import data from './data.json'

const initialState = {
    products: data,
    cart:[]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(shoeReducer, initialState)
    
    const handleCart = (obj) =>{
        dispatch({
          type:"UPDATE_CART",
          payload:{
            image : obj.image,
            title: obj.title,
            price: obj.price,
            description: obj.description 
          }
        })}
    const deleteCartItem = (cartObj) =>{
        dispatch({
            type:"TO_DELETE_CART_ITEM",
            payload:{
              image : cartObj.image,
              title: cartObj.title,
              price: cartObj.price,
              description: cartObj.description
            }
        })
    }
    
    return(
        <GlobalContext.Provider value={{
            products : state.products,
            cart: state.cart,
            handleCart,
            deleteCartItem,
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}