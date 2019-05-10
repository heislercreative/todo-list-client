const api_base = '/api/v1'

export function fetchTasks(projectId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TASKS' })
    return fetch(`${api_base}/projects/${projectId}/tasks`, {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(tasks => dispatch({
        type: 'FETCH_TASKS',
        payload: tasks
      }))
  }
}

export function createTask(projectId) {
  return (dispatch) => {
      dispatch({ type: 'CREATING_TASK' })
      return fetch(`${api_base}/projects/${projectId}/tasks`, {
        method: 'POST',
        body: new FormData(document.getElementById("task-form")),
        credentials: 'include'
      })
      .then(resp => resp.json())
      .then(task => dispatch({
        type: 'CREATE_TASK',
        payload: task
      }))
  }
}

export function updateTask(id) {
  return (dispatch) => {
    dispatch({ type: 'UPDATING_TASK' })
    return fetch(`${api_base}/tasks/${id}`, {
      method: 'PATCH',
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(tasks => dispatch({
      type: 'FETCH_TASKS',
      payload: tasks
    }))
  }
}

export function deleteTask(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETING_TASK' })
    return fetch(`${api_base}/tasks/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(tasks => dispatch({
      type: 'FETCH_TASKS',
      payload: tasks
    }))
  }
}
