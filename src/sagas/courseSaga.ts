




import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { courseActionType, userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { AssignProjectRequestFail, AssignProjectRequestSuccess, userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const AssignCourseToUser  = async (courseid: string,userAssignId: string) => {

   
    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const user_id = parseInt(userAssignId)

        const project_id = courseid

        console.log(user_id,project_id,"jbvsj",typeof(courseid))

        console.log("called in work before api")
        const data  = await axios.post('/assign/project',{user_id,project_id},config)

        console.log("called in work after api call ")

        return data

    } catch (err) {
        
        throw err
    }
    




}
/*function* handleLoginAction(action: Action) {
    try {

       const data = yield call(fetchUser);

        
    } catch(error) {

    }

}*/




function* workcourseSaga(action: Action) : any{

    //yield takeEvery
    console.log(action.payload.courseid,action.payload.userid,"watch course saga")

    try {

        console.log(action.payload.courseid,action.payload.userid,"watch course saga")
        const result = yield call(AssignCourseToUser,action.payload.courseid,action.payload.userid);

        
        yield put({type : userActionType.ASSIGN_PROJECT_SUCCESS})

        yield put({type : courseActionType.COURSE_NOT_ASSIGN_REQUEST})

    }
    catch(err) {

        yield put(AssignProjectRequestFail)
    }
}
 function* watchcourseSaga():any {

    console.log("watch course saga")
    yield takeEvery(userActionType.ASSIGN_PROJECT_REQUEST,workcourseSaga);

    //yield call(handleLoginAction);

}

export const courseSagas = watchcourseSaga;