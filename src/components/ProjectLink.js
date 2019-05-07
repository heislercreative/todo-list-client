import React from 'react'
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

const ProjectLink = ({ id, name }) => {

  return (
    <div>
      <Link className='project-link' to={`/projects/${id}`}>
        <Segment textAlign='left'>
          <h4>{name}</h4>
        </Segment>
      </Link>
    </div>
  )
}

export default ProjectLink
