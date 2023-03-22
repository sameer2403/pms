




import { Provider } from 'react-redux';
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from '@redux-saga/core';

import { composeWithDevTools } from 'redux-devtools-extension';

import {createStore,applyMiddleware} from 'redux'

import { reducer } from './reducers/rootReducer';

import thunk from 'redux-thunk';
import { usersReducer } from './userReducer';
import { coursesReducer } from './reducers/courseReducer/courseReducer';
import { getUserAssignedCourseReducer } from './reducers/UserProjectReducer/AssignedCourseToUserReducer';

const sagaMiddleware = createSagaMiddleware()



const store= createStore(reducer, composeWithDevTools(applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof  store.getState>


export default store