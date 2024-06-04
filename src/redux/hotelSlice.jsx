import { configureStore, createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
    name:'hotel',
    initialState: {
        chambres:[
            {
                num:101,
                type:'simple',
                prix:50
            }
        ],
        clients:[
            {
                id:1,
                nom:'Jane Smith',
                login:'Jane_Smith',
                password:'qase1234'
            }
        ],
        reservations:[]
    },
    reducers :{
        ajouter: (state, action) => {
            state.reservations = [...state.reservations, action.payload]
        },
        supprimer: (state, action) => {
            state.reservations = state.reservations.filter(r => r.id != action.payload)
        }
    }
})

const store = configureStore({reducer:hotelSlice.reducer})

export default store;
export const {ajouter, supprimer} = hotelSlice.actions