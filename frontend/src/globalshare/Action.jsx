import { createSlice} from "@reduxjs/toolkit";

const intialState = {
    allCardDetails:[],
    counter:''
}
const slices = createSlice({
    name:'card',
    initialState:intialState,

    reducers:{
        addToProduct:(state,actions)=>{
            const data = actions.payload;
            state.allCardDetails.push(data);
            alert("add success fully")
            console.log("adde success")
        },

        updateCounter:(state,actions)=>{
            const counterData = actions.payload;
            state.counter = counterData;
            console.log(counterData)
        },

        removeItem:(state,actions)=>{
            const id = actions.payload;
           
              const index  =state.allCardDetails.findIndex((item)=> item._id === id);
            if (index >= 0 ){
                state.allCardDetails.splice(index,1);
                alert("item remove in your card")
            }  
           
        }
    },
})

export const {addToProduct,updateCounter,removeItem} = slices.actions;
export default slices.reducer;