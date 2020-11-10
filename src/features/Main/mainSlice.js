import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {

  },
  reducers: {
    init: (state, action) => {
    }
  }

})

const { reducer, actions } = mainSlice;
export const { init } = actions;
export default reducer;