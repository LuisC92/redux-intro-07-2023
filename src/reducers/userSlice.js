import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:[],
        status:"loading",
        error:null
    },
    reducers:{
        getUsers:{
            reducer(state,action){
                // console.log(state.users);
                // console.log(action.payload);
                return {...state, userData: action.payload, status:"success"};
            }
        },
        addUsers:{
            reducer(state,action){
                // console.log(action.payload);
                return {...state, userData: [...state.userData, action.payload], status:"success"};
            }
        }
    }
})

export const {getUsers, addUsers} = userSlice.actions
export default userSlice.reducer
