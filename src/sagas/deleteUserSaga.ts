









import { takeEvery, call,put} from  'redux-saga/effects';

import { userActionType } from '../state/action-types';



import axios from 'axios';
import { Action } from '../state/action';

import { userDeleteRequestAction, userDeleteSuccessAction,userDeleteFailAction } from '../state/action-creators';
import { createTry } from 'typescript';
import { config } from 'process';


const deleteUser  = async (id : string) => {


    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    
        const { data } = await axios.post(`/user/remove/${id}`,config)

        return data

    } catch (err) {
        
        throw err
    }
    
}





function* workdeleteUserSaga(action: Action) : any{

    //yield takeEvery

    console.log("delete user saga working")

    try {
          // making an api call to delete the user
        const result = yield call(deleteUser,action.payload.id);

        console.log(result)

        // dispatching a success action with the deleted user id
        
        yield put(userDeleteSuccessAction)
    }
    catch(err) {
        // dispatching a failure action with the error message
        yield put(userDeleteFailAction)
    }
}
 function* watchuserDeleteSaga() {

    console.log("watch delete user saga")
    yield takeEvery(userActionType.USER_DELETE_REQUEST,workdeleteUserSaga);

    

}

export const userDeleteSaga = watchuserDeleteSaga