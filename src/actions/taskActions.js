const api_base = '/api/v1'

export function createTask(projectId, text) {
  return (dispatch) => {
      dispatch({ type: 'CREATING_TASK' })
      return fetch(`${api_base}/projects/${projectId}/tasks`, {
        method: 'POST',
        body: new FormData(document.getElementById("task-form")),
        credentials: 'same-origin'
      })
      // .then(project => dispatch({
      //   type: 'FETCH_PROJECT',
      //   payload: project
      // }))
  }
}

export function editTask(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETING_TASK' })
    return fetch(`${api_base}/tasks/${id}`, {
      method: 'PATCH',
      credentials: 'same-origin'
    })
    // .then(project => dispatch({
    //   type: 'FETCH_PROJECT',
    //   payload: project
    // }))
  }
}

export function deleteTask(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETING_TASK' })
    return fetch(`${api_base}/tasks/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    // .then(project => dispatch({
    //   type: 'FETCH_PROJECT',
    //   payload: project
    // }))
  }
}
