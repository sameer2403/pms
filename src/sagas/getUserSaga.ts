




import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';


import { userActionType } from '../state/action-types';

import axios from 'axios';

import { Action } from '../state/action';

import { userinfoSuccess, userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const fetchUserinfo  = async (id : string) => {

    try {
        

        const { data } = await axios.get(`/user/${id}`)

        return data

    } catch (err) {
        
        throw err
    }
    




}

function* workuserinfoSaga(action: Action) : any{

    console.log("worksaga working")

    try {

        console.log(action.payload,action.payload.id)


        const result = yield call(fetchUserinfo,action.payload.id);

        
        yield put({type : userActionType.USER_INFO_SUCCESS, payload : result})
    
    }
    catch(err) {

        yield put({type : userActionType.USER_INFO_FAIL})
    }
}
 function* watchuserinfoSaga() {

    yield takeEvery(userActionType.USER_INFO_REQUEST,workuserinfoSaga);

}

export const userinfoSagas = watchuserinfoSaga;
