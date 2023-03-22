




import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const fetchCourses  = async (id : string) => {

   // console.log(email,password)

    try {
        
       
        
    
        const { data } = await axios.get(`/project/userp/${id}`)

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




function* workuserCourseSaga(action: Action) : any{

    //yield takeEvery

    console.log("worksaga usercourses working")

    try {

        //action.payload.email

        //console.log(action.payload.user,action.payload.pass)

        console.log(action.payload.id,"aniket")
        const result = yield call(fetchCourses,action.payload.id);

        console.log(result)

        // way of calling action from work saga
        
        yield put({type : userActionType.GET_PROJECTS_OF_USER_SUCCESS, payload : result})

    

    }
    catch(err) {

        yield put({type : userActionType.GET_PROJECTS_OF_USER_FAIL})
    }
}
 function* watchuserCoursesSaga() {

    console.log("watch user course saga")
    yield takeEvery(userActionType.GET_PROJECTS_OF_USER_REQUEST,workuserCourseSaga);

    //yield call(handleLoginAction);

}

export const userCoursesSagas = watchuserCoursesSaga;