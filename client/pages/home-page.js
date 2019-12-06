import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions'

function Home() {
  const dispatch = useDispatch()
  const users = useSelector(({ users }) => users)

  useEffect(() => {
    if (users.length === 0) dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <div>Hello</div>
      <div>
        <button type="button" onClick={fetchUsers}>
          fetch
        </button>
      </div>
      {!!users.length && (
        <div>
          {users.map(user => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}

const loadData = store => store.dispatch(fetchUsers())

export default {
  loadData,
  component: Home,
}
