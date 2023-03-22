





import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { userLoginRequestAction, UsersListSuccessAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const fetchUserList  = async () => {

    //c//onsole.log(email,password)

    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    
        const { data } = await axios.get('/user/all')

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




function* workListUserSaga(action: Action) : any{

    //yield takeEvery

    console.log("worksaga working")

    try {

        //action.payload.email
        const result = yield call(fetchUserList);

        console.log(result)

        // way of calling action from work saga
        
        yield put(UsersListSuccessAction(result))

    

    }
    catch(err) {

        yield put(userLoginFailAction())
    }
}
 function* watchListUserSaga() {

    console.log("watch saga users list")
    yield takeEvery(userActionType.USERS_LIST_REQUEST,workListUserSaga);

    //yield call(handleLoginAction);

}

export const userListsSagas = watchListUserSaga;