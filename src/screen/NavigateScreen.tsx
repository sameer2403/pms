



import * as React from 'react';
import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AssignProjectRequest, courseAddRequestAction, userinfoRequest } from '../state/action-creators';
import { useAppSelector } from '../Types';

import { alertset } from '../state/action-creators';

import { Alertshow } from '../component/AlertShow';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { json } from 'stream/consumers';
import ListAllUsersScreen from './ListAllUsersScreen';
import AddProjectScreen from './AddProjectScreen';
import AddUserScreen from './AddUserScreen';
import { userActionType } from '../state/action-types';
import UserCoursAssignedScreen from './UserAssignedCoursesScreen';

import NavBarComponent from '../component/NavBarComponent';

interface IAppProps {
}

// Name        string `json:"name"`
// 	Assignee_id string `json:"assignee_id"`
// 	Status      string `json:"status"`

const NavigateScreen: React.FunctionComponent<IAppProps> = (props) => {

    const navigate = useNavigate()

    const {loadinguserinfo,successuserinfo,usersData} = useAppSelector((state:any) => {
        console.log(state);
        return state.userReducer;
    })

    const [val,setVal] = useState(0)


    console.log("value",val)
    
        // useEffect(() => {
            
        //     localStorage.setItem('role',usersData.role)
        // },[])

    // const dispatch = useDispatch()

        console.log(loadinguserinfo,successuserinfo,usersData,usersData,"heyyy")


        if(successuserinfo)
        {
            localStorage.setItem('role',usersData.role)
        }
    
    const LogoutHandler = () => {

        console.log("logouthandler")
        localStorage.removeItem('userdata')
        localStorage.removeItem('role')

        dispatch({type : userActionType.USER_INFO_RESET})
        
        navigate('/login')
    }

    // useEffect(() => {

    //     if(successuserinfo)
    //     {
    //         console.log(usersData.role,"bubububu")
    //         localStorage.setItem('role',usersData.role)
    //     }
    // },[])
       
        
    
    const AssignProject = () => {
        setVal(4)
    }

    const showusers = () => {
        
        setVal(1)
    }


    const addUser = () => {
        setVal(2)
    }

    const addProject = () => {
        setVal(3)
    }

    useEffect(() => {


        if(!localStorage.getItem('userdata'))
        {
            navigate('/login')
        }
    },[])


    const dispatch = useDispatch()

    useEffect(() => {

        const datas : any = localStorage.getItem('userdata')

        const vals = JSON.parse(datas)

        const userid = vals.userId

        dispatch(userinfoRequest(userid))

        //localStorage.setItem('role',usersData.role)

    },[])

    // console.log(val)
   
    const values : any = localStorage.getItem('userdata')

    const role : any = localStorage.getItem('role')
    // const usernames = JSON.parse(values)

    return(
        <div style = {{marginTop : '45px'}}>
        {/* {usersData.role == 'Admin'  || localStorage.getItem('role') == 'Admin' ? (<Navbar bg="dark" variant="dark"  sticky = "top" style = {{marginTop : '20px'}}>
        <Container>
          <Navbar.Brand >Welcome {usersData.userName} !!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Button onClick = {showusers}>Show All Users</Button></Nav.Link>
            <Nav.Link ><Button onClick = {addUser}>Add User</Button></Nav.Link>
            <Nav.Link><Button onClick = {addProject}>Add Project</Button></Nav.Link>
            <Nav.Link><Button onClick = {AssignProject}>Assigned Project</Button></Nav.Link>
            <Nav.Link><Button variant = 'danger' onClick = {LogoutHandler}>Logout</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>) : (

<Navbar bg="dark" variant="dark" sticky = "top">
<Container>
  <Navbar.Brand >Welcome {usersData.userName} !!</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link><Button onClick = {showusers}>Show All Users</Button></Nav.Link>
    <Nav.Link ><Button onClick = {AssignProject}>Assigned Project</Button></Nav.Link>
    <Nav.Link ><Button variant = 'danger' onClick = {LogoutHandler}>Logout</Button></Nav.Link>
  </Nav>
</Container>
</Navbar>
      )} */}

      <Container>
       <NavBarComponent username = {usersData.userName} addUser = {addUser} addProject = {addProject} AssignProject = {AssignProject} LogoutHandler = {LogoutHandler} role = {role} showusers = {showusers}/>
      </Container>

      
      <div>
         {val == 1 && <ListAllUsersScreen/>}
         {val == 2 && <AddUserScreen/> }
         {val == 3 && <AddProjectScreen/>}
         {val == 4 && <UserCoursAssignedScreen/>}
      </div>
        </div>
    );
};

export default NavigateScreen
