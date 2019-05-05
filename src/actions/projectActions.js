const api_base = '/api/v1'

export function fetchProjects() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECTS' })
    return fetch(`${api_base}/users/1/projects`)
      .then(resp => resp.json())
      .then(projects => dispatch({
        type: 'FETCH_PRODUCTS',
        payload: projects
      }))
  }
}

export function fetchProject(props) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECT' })
    return fetch(`/api/projects/${props.projectId}`)
      .then(resp => resp.json())
      .then(project => dispatch({
        type: 'FETCH_PROJECT',
        payload: project
      }))
  }
}
