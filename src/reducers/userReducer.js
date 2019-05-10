export default function userReducer(state = {
  user: '',
  approval: false
}, action) {
  switch (action.type) {

    case 'SIGNUP_USER':
      return {
        ...state,
        user: action.payload,
        approval: true
      }

    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload
      }

    case 'LOGOUT_USER':
      return {
        ...state,
        user: {}
      }

    default:
      return state
  }
}
