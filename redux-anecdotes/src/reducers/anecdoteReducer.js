import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      return state.map(a => a.id === id ? { ...a, votes: a.votes + 1 } : a )
    },
    createAnecdote(state, action) {
      const anecdote = action.payload
      return state.concat(anecdote)
    },
    setAnecdotes(state, action) {
      const anecdotes = action.payload
      return anecdotes
    }
  },
})

export const { voteAnecdote, createAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
