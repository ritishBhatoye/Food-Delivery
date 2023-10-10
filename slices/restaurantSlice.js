import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

const initialState= {
   restaurant:null,
 }

// const initialState: RestaurantSlice = {
//   value: 0,
// }

export const RestaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
   
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant} = RestaurantSlice.actions;
export const selectRestaurant=state=>state.restaurant.restaurant;

export default RestaurantSlice.reducer