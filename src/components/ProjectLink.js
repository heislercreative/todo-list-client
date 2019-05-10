import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Label } from 'semantic-ui-react'

const ProjectLink = ({ id, name, tasks }) => {

  return (
    <Menu.Item
      as={Link} to={`/projects/${id}`}
      name={name} className='project-link'
    >
      <Label color='teal'>{tasks.length}</Label>
      {name}
    </Menu.Item>
  )
}

export default ProjectLink
