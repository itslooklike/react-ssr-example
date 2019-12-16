import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions'

function Home() {
  const dispatch = useDispatch()
  const users = useSelector(({ users }) => users)
  const getUsers = useCallback(() => {
    dispatch(fetchUsers())
  }, [])

  useEffect(() => {
    if (users.length === 0) getUsers()
  }, [])

  return (
    <div>
      <div>Hello</div>
      <div>
        <button type="button" onClick={getUsers}>
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
