import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'header',
  initialState: {
    focused: false
  },
  reducers: {
    onFocus: state => { state.focused =  true},
    onBlur: state => { state.focused = false}
  }
})

export const { onBlur, onFocus } = slice.actions

export const selectFocused = (state: { header: { focused: boolean } }) => state.header.focused

export default slice.reducer