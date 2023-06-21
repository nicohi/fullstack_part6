import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = ({ addAnecdote }) => {

  const notificationDispatch = useNotificationDispatch()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    addAnecdote(content)
    event.target.anecdote.value = ''
    notificationDispatch({ type: 'SET', payload: `anecdote '${content}' created` })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
