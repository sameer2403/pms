




import * as React from 'react';
import { useState } from 'react';
import { Button, Form, ListGroup,Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Alertshow } from '../component/AlertShow';


import { alertset, getProjectsOfUserRequestAction, userSignupRequestAction } from '../state/action-creators';

import { useAppSelector } from '../Types';

import { useEffect } from 'react';

import Loading from '../component/Loading';



interface IAppProps {
}

type allcourses = {

}
const UserCoursAssignedScreen: React.FunctionComponent<IAppProps> = (props) => {

    const dispatch = useDispatch();

    const {loadingUserCourse ,successCourse,errorCourse,userCourses} = useAppSelector((state : any) => {
      
      return state.getUserAssignedCourseReducer
    })
    
    useEffect(() => {

        const userdatas : any = localStorage.getItem('userdata')

        const datas = JSON.parse(userdatas)

        const {userId} = datas
        
        dispatch(getProjectsOfUserRequestAction(userId))
    },[])

    // "project_id": 2,
    // "name": "p2",
    // "assignee_id": 1,
    // "status": "Inactive",
    // "Users": null

    const navigate = useNavigate()


    const navigateHandler = () => {

      navigate('/navigate')
    }
  
return (
  <div style = {{marginTop : '100px'}}>
  
  
  {loadingUserCourse ? <Loading /> : <Table striped bordered hover responsive className='table-sm' style = {{marginTop : '100px'}}>
    
      <thead>
        <tr>
          
          <th>Project ID</th>
          <th>Project Name</th>
          <th>Assigneed ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {userCourses.map((item : any, index : any) => (
          <tr key={index}>
            <td>{item.project_id}</td>
            <td>{item.name}</td>
            <td>{item.assignee_id}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
   
    </Table>}

    {<Button variant = 'success' onClick = {navigateHandler}>Go back</Button>}
  </div>
);
}

export default UserCoursAssignedScreen;


