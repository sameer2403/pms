


import { Action } from "../../action"
import { userActionType } from "../../action-types"

type userstate = {

    
    loadingUserCourse: boolean,

    successCourse: boolean,
    errorCourse: boolean,
    userCourses: []
}

const initialState : userstate = {

    loadingUserCourse: true,

    successCourse: false,
    errorCourse: false,
    userCourses: []
}

export const getUserAssignedCourseReducer = (_state: userstate = initialState, action : Action) => {

    switch (action.type) {


        case userActionType.GET_PROJECTS_OF_USER_REQUEST :
            return {

                ..._state,

                loadingUserCourse : true
            }
        break;

        case userActionType.GET_PROJECTS_OF_USER_SUCCESS :
            return {

                ..._state,
                loadingUserCourse: false,
                successCourse: true,
                userCourses : action.payload

            }

        break;

        case userActionType.GET_PROJECTS_OF_USER_FAIL:
            return {

                ..._state,
                loadingUserCourse: false,
                errorCourse : true                
            }

      
        break;

        default:
            return initialState

        
       
    }
}