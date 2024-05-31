import { configureStore, createSlice } from "@reduxjs/toolkit";


const hotelSlice = createSlice({
    name:'hotel',
    initialState: {

    },
    reducers :{

    }
})

const store = configureStore({reducer:hotelSlice.reducer})

export default store;