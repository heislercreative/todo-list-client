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

    case 'FETCH_TASKS':
      return {
        ...state,
        selected: {
          ...state.selected,
          tasks: action.payload
        }
      }

    case 'CREATE_TASK':
      return {
        ...state,
        selected: {
          ...state.selected,
          tasks: [
            ...state.selected.tasks, action.payload
            ]
        }
      }

      // case 'UPDATE_TASK':
      //   return {
      //     ...state,
      //     selected: {
      //       ...state.selected,
      //       tasks: [
      //         ...state.selected.tasks,
      //         state.selected.tasks[action.payload.id] = action.payload
      //         ]
      //     }
      //   }

    default:
      return state
  }
}
