

import * as React from 'react';
import { useEffect } from 'react';
import { Alert, Button, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loading from '../component/Loading';
import { alertset, AssignProjectRequest, NotActiveProjectRequest } from '../state/action-creators';
import { useAppSelector } from '../Types';

import { useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';






type cvb = {

  project_id: any,
  name: string,
  assignee_id: string,
  status: string,
  Users: any
}
type courseStates = {

  course_id: string,

  course_name: string,

  success: boolean,

  error: any,


  loading: boolean,

  course_id_to_delete: string,

  course_id_to_delete_loading: boolean,

  course_id_to_delete_success: boolean,

  course_id_to_delete_error: boolean,

  success_delete_from_user: boolean,

  user_id_from_to_delete: string,

  loading_delete_from_user: boolean,


  error_delete_from_user: {},

  course_not_assign: [cvb],

  course_not_assign_loading: boolean,

  course_not_assign_success: boolean,

  course_not_assign_error: {}
}


interface IAppProps {
}

const ProjectsOfUser: React.FunctionComponent<IAppProps> = (props) => {


  const AssignHandler2 = (userid: any, project_id: string, navigate: any, dispatch: any, e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault()

    dispatch(AssignProjectRequest(userid, project_id))

    dispatch(NotActiveProjectRequest())

  }

  const navigate = useNavigate()

  

  const dispatch = useDispatch()

  useEffect(() => {

    const itemSet = (localStorage.getItem('userdata'));
    console.log(itemSet)
    if (!itemSet) {
      console.log('here')
      navigate('/navigate')
    }


  }, [])


  useEffect(() => {

    dispatch(NotActiveProjectRequest())
  }, [])

  const userids = useParams()

  const ids = userids.id


  //const notassigned: courseStates = useAppSelector(state => state.courseNotAssignReducer)

  const { course_not_assign, course_not_assign_loading, course_not_assign_success, course_not_assign_error } = useAppSelector(state => state.courseReducer)

  const { loadingAssign, successAssign, errorAssign } = useAppSelector(state => state.courseReducer)


  return (
    <div>

      {successAssign ? <div>SuccessFully Assigned</div> : errorAssign ? <div>Error in assigning</div> : <div></div>}
      {course_not_assign_loading ? <Loading /> : course_not_assign_error ? <h1>Error</h1> : (

        <Table striped bordered hover responsive className='table-sm' style={{ marginTop: '40px' }}>
          <thead>
            <tr>

              <th>project_id</th>
              <th> Name</th>
              <th>Assignee</th>

              <th>Assign Project</th>
            </tr>
          </thead>
          <tbody>

            {course_not_assign.map((u:any) =>
              <tr >
                <td>{u.project_id}</td>
                <td>{u.name}</td>
                <td>{u.assignee_id}</td>

                <td ><Button variant='primary' onClick={(event) => AssignHandler2(ids, u.project_id, navigate, dispatch, event)}>Assign</Button> </td>
              </tr>
            )}



          </tbody>
        </Table>
      )}
    </div>


  );
};

export default ProjectsOfUser;
