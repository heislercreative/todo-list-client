export default function userReducer(state = {
  current: '',
  approval: false
}, action) {
  switch (action.type) {

    case 'SIGNUP_USER':
      return {
        ...state,
        current: action.payload,
        approval: true
      }

    case 'LOGIN_USER':
      return {
        ...state,
        current: action.payload
      }

    case 'LOGOUT_USER':
      return {
        ...state,
        current: ''
      }

    default:
      return state
  }
}
