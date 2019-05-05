export default function projectReducer(state = {
  list: [],
  selected: {}
}, action) {
  switch (action.type) {

    case 'FETCH_PROJECTS':
      return {
        ...state,
        list: action.payload
      }

    case 'FETCH_PROJECT':
      return {
        ...state,
        selected: action.payload
      }

    default:
      return state
  }
}
