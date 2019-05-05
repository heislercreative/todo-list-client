import React from 'react'
import { Link } from 'react-router-dom'

const ProjectBasic = ({ id, name }) => {

  return (
    <div>
      <Link className='project-link' to={`/projects/${id}`}>
        <h4>{name}</h4>
      </Link>
    </div>
  )
}

export default ProjectBasic
