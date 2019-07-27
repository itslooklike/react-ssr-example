import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from './actions'

function Home(props) {
  const { users, fetchUsers } = props

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

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

export function loadData(store) {
  return store.dispatch(fetchUsers())
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Home)
