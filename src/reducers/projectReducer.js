export default function projectReducer(state = {
  list: [],
  selected: {},
  listLoaded: false,
  selectedLoaded: false
}, action) {
  switch (action.type) {

    case 'LOADING_PROJECTS':
      return {
        ...state,
        listLoaded: false
      }

    case 'FETCH_PROJECTS':
      return {
        ...state,
        list: action.payload,
        listLoaded: true
      }

    case 'LOADING_PROJECT':
      return {
        ...state,
        selectedLoaded: false
      }

    case 'FETCH_PROJECT':
      return {
        ...state,
        selected: action.payload,
        selectedLoaded: true
      }

    default:
      return state
  }
}
