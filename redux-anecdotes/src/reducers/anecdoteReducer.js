import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateAnecdote(state, action) {
      const anecdote = action.payload
      return state.map(a => a.id === anecdote.id ? anecdote : a )
    },
    appendAnecdote(state, action) {
      const anecdote = action.payload
      return state.concat(anecdote)
    },
    setAnecdotes(state, action) {
      const anecdotes = action.payload
      return anecdotes
    }
  },
})

export const { updateAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer

export const initializeAnecdotes = () => {
    return async dispatch => {
      const anecdotes = await anecdoteService.getAll()
      dispatch(setAnecdotes(anecdotes))
    }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = anecdote => {
  const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
  return async dispatch => {
    const result = await anecdoteService.update(newAnecdote.id, newAnecdote)
    dispatch(updateAnecdote(result))
  }
}
