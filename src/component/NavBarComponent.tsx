
import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'

type Props = {
    username : string,
    showusers : any,
    addUser : any,
    addProject : any,
    AssignProject : any,
    LogoutHandler : any,
    role : string

}

const NavBarComponent : any = (props: Props) => {
  return (
    <div>
    <Navbar bg="dark" variant="dark"  sticky = "top" style = {{marginTop : '20px'}}>
      <Navbar.Brand >Welcome {props.username} !!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Button onClick = {props.showusers}>Show All Users</Button></Nav.Link>
            {props.role == 'Admin' && <Nav.Link ><Button onClick = {props.addUser}>Add User</Button></Nav.Link>},
            {props.role == 'Admin' && <Nav.Link><Button onClick = {props.addProject}>Add Project</Button></Nav.Link> }
            <Nav.Link><Button onClick = {props.AssignProject}>Assigned Project</Button></Nav.Link>
            <Nav.Link><Button variant = 'danger' onClick = {props.LogoutHandler}>Logout</Button></Nav.Link>
          </Nav>
        
      </Navbar>

    </div>
  )
}

export default NavBarComponent