







import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { courseActionType, userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { NotActiveProjectFail, NotActiveProjectSuccess, userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const func  = async () => {


    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    
        const { data } = await axios.get('/project/inactive')

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




function* worknotassignedcourseSaga(action: Action) : any{

    //yield takeEvery


    try {

        //action.payload.email
        const result = yield call(func);


        yield put(NotActiveProjectSuccess(result))

    

    }
    catch(err) {

        yield put(NotActiveProjectFail)
    }
}
 function* watchnotassignedcourseSaga():any {

    yield takeEvery(courseActionType.COURSE_NOT_ASSIGN_REQUEST,worknotassignedcourseSaga);

    //yield call(handleLoginAction);

}

export const coursenotassignedSaga = watchnotassignedcourseSaga;