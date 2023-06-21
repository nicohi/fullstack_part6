import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import Filter from './Filter'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => {
    const sorted = [ ...state.anecdotes ].sort((a,b) => b.votes - a.votes)
    const filtered = sorted.filter(a =>
      a.content.toLowerCase().includes(state.filter.toLowerCase()))
    return filtered
  })
  const dispatch = useDispatch()

  const vote = anecdote => () => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList
