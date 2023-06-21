import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification_(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      return null
    }
  },
})

export const { setNotification_, clearNotification } = notificationSlice.actions

export const setNotification = (text, seconds) => {
  const millis = seconds * 1000
  return dispatch => {
    dispatch(setNotification_(text))
    setTimeout(() => {
      dispatch(clearNotification())
    }, millis)
  }
}

export default notificationSlice.reducer
