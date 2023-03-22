












import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

import { userActionType } from '../state/action-types';

import axios from 'axios';
import { Action } from '../state/action';

import { userLoginRequestAction, userSignupFailAction, userUpdateAdminActionFail, userUpdateAdminActionSuccess } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const addUser  = async (id : string) => {

    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    
        const { data } = await axios.post(`/user/update/${id}`,config)

        return data

    } catch (err) {
        
        throw err
    }
    




}




function* workupdateadminSaga(action: Action) : any{


    try {

       
        const result = yield call(addUser,action.payload.id);
        
        yield put({type : userActionType.USER_UPATE_ADMIN_SUCCESS})

    }
    catch(err) {

        yield put({type : userActionType.USER_INFO_FAIL})
    }
}
 function* watchupdateadminSaga() {

    console.log("watch add user saga")
    yield takeEvery(userActionType.USER_UPDATE_ADMIN_REQUEST,workupdateadminSaga);

    //yield call(handleLoginAction);

}

export const updateAdminSaga = watchupdateadminSaga