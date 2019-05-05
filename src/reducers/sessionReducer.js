export default function sessionReducer(state = [], action) {
  switch (action.type) {

    case 'LOGIN_USER':
      return action.payload

    case 'LOGOUT_USER':
      return action.payload

    default:
      return state
  }
}
