
import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loading from '../component/Loading'
import { getProjectsOfUserRequestAction } from '../state/action-creators'
import { useAppSelector } from '../Types'

import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
type Props = {}

const AssignedCoursesScreen = (props: Props) => {

    const navigate = useNavigate()
    
    const navigateHandler = () => {

        navigate('/navigate')
      }
    
    const { id }     = useParams()

    const {loadingUserCourse ,successCourse,errorCourse,userCourses} = useAppSelector(state => state.getUserAssignedCourseReducer)

    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getProjectsOfUserRequestAction(id))
        
    },[])
  return (
    <div>
        <>
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
  </>
    </div>
  )
}

export default AssignedCoursesScreen


