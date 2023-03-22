

import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';


import { userActionType } from '../state/action-types';

import axios from 'axios';

import { Action } from '../state/action';

import { userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const fetchUser  = async (username: string,password: string) => {

    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        
    
        const { data } = await axios.post('/user/login',{username,password},config)

        return data

    } catch (err) {
        
        throw err
    }

}


function* workuserSaga(action: Action) : any {

    try {

        const result = yield call(fetchUser,action.payload.user,action.payload.pass);
        
        yield put({type : userActionType.USER_LOGIN_SUCCESS, payload : result})

    }
    catch(err) {

    yield put({type : userActionType.USER_LOGIN_FAIL})
    
    }


        
}
 function* watchuserSaga() {

   
    yield takeEvery(userActionType.USER_LOGIN_REQUEST,workuserSaga);

}

export const userSagas = watchuserSaga