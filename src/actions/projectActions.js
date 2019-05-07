const api_base = '/api/v1'

export function fetchProjects(userId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECTS' })
    return fetch(`${api_base}/users/${userId}/projects`)
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
    return fetch(`${api_base}/projects/${id}`)
      .then(resp => resp.json())
      .then(project => dispatch({
        type: 'FETCH_PROJECT',
        payload: project
      }))
  }
}
