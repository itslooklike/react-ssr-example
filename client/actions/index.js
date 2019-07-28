export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async (dispatch, _, api) => {
  const response = await api.get('/users')
  dispatch({ type: FETCH_USERS, payload: response })
}

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'
export const fetchCurrentUser = () => async (dispatch, _, api) => {
  const response = await api.get('/current_user')
  dispatch({ type: FETCH_CURRENT_USER, payload: response })
}
