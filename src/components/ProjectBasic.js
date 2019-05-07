import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Divider } from 'semantic-ui-react'

const ProjectBasic = ({ id, name }) => {

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

export default ProjectBasic
