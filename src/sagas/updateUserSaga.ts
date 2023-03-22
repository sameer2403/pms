
import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects'

import { userActionType } from '../state/action-types';

import axios from 'axios';

import { Action } from '../state/action';

import { userLoginRequestAction, userSignupFailAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const addUser  = async (username : string,email: string,password: string,role : string) => {

    console.log(email,password)

    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    
        const { data } = await axios.post('/user/add',{username,email,password,role},config)

        return data

    } catch (err) {
        
        throw err
    }
    




}

function* workupdateuserSaga(action: Action) : any{


    try {

       
        const result = yield call(addUser,action.payload.username,action.payload.email,action.payload.password,action.payload.role);
    

    }
    catch(err) {

        yield put(userSignupFailAction)
    }
}
 function* watchupdateuserSaga() {

   
    yield takeEvery(userActionType.USER_SIGNUP_REQUEST,workupdateuserSaga);

}

export const AdduserSaga = watchupdateuserSaga;