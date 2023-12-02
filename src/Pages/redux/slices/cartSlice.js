const {createSlice} = require("@reduxjs/toolkit")
const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
            alert(`Added to cart!!!`)
        },
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.
                _id!=action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export const {addToCart , removeFromCart , emptyCart} = cartSlice.actions
export default cartSlice.reducer