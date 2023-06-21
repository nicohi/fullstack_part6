import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import Filter from './Filter'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => {
    const sorted = [ ...state.anecdotes ].sort((a,b) => b.votes - a.votes)
    const filtered = sorted.filter(a =>
      a.content.toLowerCase().includes(state.filter.toLowerCase()))
    return filtered
  })
  const dispatch = useDispatch()

  const vote = (id) => () => {
    dispatch(voteAnecdote(id))
  }

  return (
    <>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList
