

import { combineReducers } from 'redux'

import {  coursesReducer } from './courseReducer/courseReducer'

import { usersReducer } from '../userReducer'

import { getUserAssignedCourseReducer } from './UserProjectReducer/AssignedCourseToUserReducer'

export const reducer  = combineReducers({


    userReducer : usersReducer,

    courseReducer : coursesReducer,

   

    getUserAssignedCourseReducer : getUserAssignedCourseReducer

})