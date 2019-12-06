export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'

export const fetchUsers = () =>
  async function(dispatch, _, api) {
    const response = await api.get('/users')
    dispatch({ type: FETCH_USERS, payload: response })
  }

export const fetchCurrentUser = () =>
  async function(dispatch, _, api) {
    const response = await api.get('/current_user')
    dispatch({ type: FETCH_CURRENT_USER, payload: response })
  }
