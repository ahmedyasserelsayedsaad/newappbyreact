import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    initialState:[],
    name:'CartSlice',
    reducers:{
        addtocart:(state,action)=>{
            const founded=state.find((product)=>product.id === action.payload.id);
            if(founded){
                founded.quntity+=1
            }else {
                const proColn = { ...action.payload, quntity: 1 }
                state.push(proColn);
            }
           
        },
        deletefromcart:(state,action)=>{
            return state.filter((product)=>{
                return (product !==action.payload.id)
            })
        },
        clearcart:(state,action)=>{
            return [] ;
        }
    }
})

export const {addtocart,deletefromcart,clearcart}=CartSlice.actions;
export default CartSlice.reducer;