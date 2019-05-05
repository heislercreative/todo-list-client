const api_base = '/api/v1'

export function createUser() {
  return (dispatch) => {
      dispatch({ type: 'SIGNING_UP' })
      return fetch(`${api_base}/users`, {
        method: 'POST',
        body: new FormData(document.getElementById("user-form")),
        credentials: 'same-origin'
      })
      .then(resp => loginOptions(resp, dispatch))
  }
}

export function updateUser(props) {
  return (dispatch) => {
    dispatch({ type: 'UPDATING_USER' })
    return fetch(`${api_base}/users/${props.user.id}`, {
      method: 'POST',
      body: new FormData(document.getElementById("user-form")),
      credentials: 'same-origin'
    })
    .then(resp => loginOptions(resp, dispatch))
  }
}

export function loginUser() {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' })
    return fetch(`${api_base}/sessions`, {
      method: 'POST',
      body: new FormData(document.getElementById("login-form")),
      credentials: 'same-origin'
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
    console.log('error')
  }
}

export function logoutUser() {
  return (dispatch) => {
    const user = {}
    dispatch({
      type: 'LOGOUT_USER',
      payload: user
    })
    .then(window.location = '/')
  }
}
