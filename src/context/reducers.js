export const shoeReducer = (state,action)=>{
     switch (action.type) {
         case "UPDATE_CART":
             return{
                 ...state,
                 cart:[action.payload,...state.cart]
             }
         case "TO_DELETE_CART_ITEM":
             return{
                 ...state,
                 cart:[...state.cart.filter((item)=> item.image !== action.payload.image)]
             }
     
         default:
             break;
     }
}