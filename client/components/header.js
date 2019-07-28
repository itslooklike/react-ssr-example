import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCurrentUser } from '../actions'

export default function Header() {
  const auth = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()

  console.log(auth)

  return (
    <div>
      <h1>Hello! this is Header!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button type="button" onClick={() => dispatch(fetchCurrentUser())}>
          Try Reauth
        </button>
      </nav>
    </div>
  )
}
