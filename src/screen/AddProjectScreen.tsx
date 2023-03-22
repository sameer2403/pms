

import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AssignProjectRequest, courseAddRequestAction } from '../state/action-creators';
//import { courseAddReducer } from '../state/reducers/courseAddReducer';
import { useAppSelector } from '../Types';

import { alertset } from '../state/action-creators';
import { Alertshow } from '../component/AlertShow';

interface IAppProps {
}

// Name        string `json:"name"`
// 	Assignee_id string `json:"assignee_id"`
// 	Status      string `json:"status"`

const AddProjectScreen: React.FunctionComponent<IAppProps> = (props) => {

    const [name,setName] = React.useState('')

    const [assigneeid,setAssigneeid] = useState('')

    const dispatch = useDispatch()

    //const alertData   = useAppSelector(state => state.user)

    type addProjectState = {

        loadingAddCourse : boolean,
    
        errorAddCourse : boolean,
    
        successAddCourse : boolean
    }

    const addProject : addProjectState = useAppSelector((state: any) => {
      return state.courseReducer
    })

    const {loadingAddCourse, errorAddCourse,successAddCourse} = addProject

   
    const nameFunc = (name : string) => {

        setName(name)

    }

    const assigneeFunc = (assign : string) => {

        setAssigneeid(assign)
    }

    const submitHandlerFunc = () => {

        dispatch(courseAddRequestAction(name,assigneeid))

    }

    // if(successAddCourse)
    // {
    //   dispatch(alertset("successfully addedd","success"))
    // }

    const arr = {"msgtype" : "success", "msg" : "successfully added course"}

    const arr2 = {"msgtype" : "danger", "msg" : "course not added"}

  return (
    <>
    {successAddCourse && <Alertshow arrs = {arr}/>},
    {errorAddCourse && <Alertshow arrs = {arr2} />},
    <Form style = {{marginTop : '100px'}}>
    <Form.Group className="mb-3" controlId="fullName">

      <Form.Label>Project name</Form.Label>
      <Form.Control type="text" placeholder="Enter Project name"  onChange = {(event) => nameFunc(event.target.value)}/>
      <Form.Text className="text-muted">
  
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Assignee id</Form.Label>
      <Form.Control type="email" placeholder="Enter assigneediD"  onChange = {(event) => assigneeFunc(event.target.value)}/>
      
      <Form.Text className="text-muted">
       
      </Form.Text>
    </Form.Group>

   

    <Button onClick = {submitHandlerFunc}>Submit</Button>
    
    
    <br/>
    <br/>
    {/* {errorAddCourse ? <div style = {{color : 'red'}}>Please enter course and assignee id correctly</div> : <div></div>}

    {successAddCourse ? <div style={{color : 'green'}}>Success</div> : <div></div>} */}

  
  </Form>
  </>
  );
};

export default AddProjectScreen;
