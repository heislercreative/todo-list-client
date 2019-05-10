const api_base = '/api/v1'

export function fetchProjects() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECTS' })
    return fetch(`${api_base}/projects`, {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(projects => dispatch({
        type: 'FETCH_PROJECTS',
        payload: projects
      }))
  }
}

export function fetchProject(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECT' })
    return fetch(`${api_base}/projects/${id}`, {
      credentials: 'include'
    })
    .then(resp => resp.json())
    .then(project => dispatch({
      type: 'FETCH_PROJECT',
      payload: project
    }))
  }
}

export function createProject() {
  return (dispatch) => {
      dispatch({ type: 'CREATING_TASK' })
      return fetch(`${api_base}/projects`, {
        method: 'POST',
        body: new FormData(document.getElementById("project-form")),
        credentials: 'include'
      })
      .then(resp => responseOptions(resp, dispatch))
  }
}

export function updateProject(id) {
  return (dispatch) => {
      dispatch({ type: 'CREATING_TASK' })
      return fetch(`${api_base}/projects/${id}`, {
        method: 'PATCH',
        body: new FormData(document.getElementById("project-form")),
        credentials: 'include'
      })
      .then(resp => responseOptions(resp, dispatch))
  }
}

function responseOptions(resp, dispatch) {
  if (resp.status === 201 || resp.status === 200) {
    const project = resp.json()
    .then(project => dispatch({
      type: 'FETCH_PROJECT',
      payload: project
    }))
  } else {
    const error = resp.json()
    .then(error => {
      let msg = ''
      for (let key in error) {
        msg += `${key.charAt(0).toUpperCase() + key.slice(1)} ${error[key]}\n`
      }
      console.log(msg)
      window.alert(msg)
    })
  }
}

export function deleteProject(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETING_PROJECT' })
    return fetch(`${api_base}/projects/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
  }
}
