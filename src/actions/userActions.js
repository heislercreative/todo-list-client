const api_base = '/api/v1'

export function createUser() {
  return (dispatch) => {
    dispatch({ type: 'SIGNING_UP' })
    return fetch(`${api_base}/users`, {
      method: 'POST',
      body: new FormData(document.getElementById("user-form")),
      credentials: 'same-origin'
    })
      .then(resp => resp.json())
      .then(user => dispatch({
        type: 'SIGNUP_USER',
        payload: user
      }))
  }
}

export function fetchUser() {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_USER' })
    return fetch(`${api_base}/user`, {
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(user => dispatch({
      type: 'LOGIN_USER',
      payload: user
    }))
  }
}

export function updateUser(props) {
  return (dispatch) => {
    dispatch({ type: 'UPDATING_USER' })
    return fetch(`${api_base}/users/${props.user.id}`, {
      method: 'POST',
      body: new FormData(document.getElementById("user-form")),
      credentials: 'include'
    })
    .then(resp => loginOptions(resp, dispatch))
  }
}

export function loginUser() {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' })
    return fetch(`${api_base}/auth/login`, {
      method: 'POST',
      body: new FormData(document.getElementById("login-form")),
      credentials: 'include'
    })
    .then(resp => loginOptions(resp, dispatch))
  }
}

function loginOptions(resp, dispatch) {
  if (resp.status === 201) {
    const user = resp.json()
    .then(user => dispatch({
      type: 'LOGIN_USER',
      payload: user
    }))
  } else {
    const error = resp.json()
    .then(error => {
      const msg = error.error
      console.log(msg)
      window.alert(msg)})
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_OUT' })
    return fetch(`${api_base}/auth/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(user => dispatch({
      type: 'LOGOUT_USER',
      payload: user
    }))
  }
}
