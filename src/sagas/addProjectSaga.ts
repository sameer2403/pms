









import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { courseActionType, userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { courseAddRequestFail, courseAddRequestSuccess, userLoginRequestAction, userSignupFailAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';
import { useDispatch } from 'react-redux';


const addProject = async (name : string,assignee_id: string) => {

    console.log(name,assignee_id)

    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const status : string = "Inactive"
        const { data } = await axios.post('/project/add',{name,assignee_id,status},config)

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




function* workaddProjectSaga(action: Action) : any{

    //yield takeEvery

    console.log("work add user saga working")

    try {

        //action.payload.email
        const result = yield call(addProject,action.payload.name,action.payload.assignee_id);

        console.log(result)

        // way of calling action from work saga
       // const dispacth = useDispatch()

        yield put({type : courseActionType.ADD_PROJECT_SUCCESS})

    

    }
    catch(err) {

        yield put(courseAddRequestFail)
    }
}
 function* watchaddProjectSaga() {

    console.log("watch add user saga")
    yield takeEvery(courseActionType.ADD_PROJECT_REQUEST,workaddProjectSaga);

    //yield call(handleLoginAction);

}

export const AddprojectSaga = watchaddProjectSaga;