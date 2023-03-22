






import { Action } from "./action"
import { userActionType } from "./action-types"


type userstate = {

    
    // delete user

    loadingDelete: boolean,

    successDelete : boolean,

    errorDelete : boolean,

    // getting userinfo

    loadinguserinfo : boolean,

    successuserinfo : boolean,

    erroruserinfo : boolean,

    usersData : {},

    emailLogin: string,

    passwordLogin : string,

    loadingLogin: boolean,

    successLogin: boolean,

    errorLogin: boolean,

    userIdLogin : string,

    userNameLogin : string,

    roleLogin: "",

    usersList : [],

    usersLoading : boolean,

    successUsers : boolean,

    errorusers : boolean,

    usernameSignup : "",

    emailSignup : "",

    passwordSignup : "",

    loadingSignup : true,

    successSignup : false,

    roleSignup : "",

    errorSignup : {},

    loadingupdate: boolean,

    successupdate : boolean,

    errorupdate : boolean
    
    
}

const initialState : userstate = {

    loadingDelete : true,

    successDelete : false,

    errorDelete : false,

    loadinguserinfo : true,

    successuserinfo : false,

    erroruserinfo : false,

    usersData : {},

    emailLogin: "",

    passwordLogin: "",

    loadingLogin : true,

    successLogin: false,

    errorLogin : false,

    roleLogin: "",

    userIdLogin : "",

    userNameLogin : "",
    
    usersList : [],

    usersLoading : true,

    successUsers : false,

    errorusers : false,

    usernameSignup : "",

    emailSignup : "",

    passwordSignup : "",

    loadingSignup : true,

    successSignup : false,

    roleSignup : "",

    errorSignup : {},

    loadingupdate : true,

    successupdate : false,

    errorupdate : false


}


export const usersReducer  = (_state: userstate = initialState, action : Action) : any => {

    switch (action.type) {

        case userActionType.USER_DELETE_REQUEST :
            return {
                ..._state,
                
               loadingDelete : true
            }

        break;

        case userActionType.USER_DELETE_SUCCESS:
            return {

                ..._state,
                loadingDelete: false,
                successDelete: true,
                
            }
        break;

        case userActionType.USER_DELETE_FAIL:
            return {

                ..._state,

                loadingDelete: false,

                errrorDelete: true

            }
        break;

        case userActionType.USER_INFO_REQUEST :
            return {
                ..._state,
                
                loadinguserinfo : true
            }
        break;

        case userActionType.USER_INFO_SUCCESS :
            return {
                ..._state,
                
                loadinguserinfo : false,

                successuserinfo : true,
                usersData : action.payload
            }
        break;

        case userActionType.USER_INFO_RESET :
            return initialState
        break;

        case userActionType.USER_LOGIN_REQUEST:
            return {
                ..._state,
                
                emailLogin : action.payload.email,

                passwordLogin: action.payload.password,
                
                loadingLogin : true
            }

        break;

        case userActionType.USER_LOGIN_SUCCESS:
            return {

                ..._state,
                loadingLogin : false,
                successLogin: true,
                message : action.payload.message,

                userIdLogin : action.payload.userId,
            
                userNameLogin : action.payload.userName,

                roleLogin : action.payload.role
                
            }
        break;

        case userActionType.USER_LOGIN_FAIL:
            return {

                ..._state,

                loadingLogin: false,

                successLogin: false,

                errorLogin : true

            }
        break;

        case userActionType.USERS_LIST_REQUEST :
            return {
                ..._state,
                usersLoading : true
            }
        break;
        case userActionType.USERS_LIST_SUCCESS :
            return {

                ..._state,
                usersLoading : false,

                users : action.payload,

                successUsers : true
            }
        break;

        case userActionType.USERS_LIST_FAIL :
            return {
                ..._state,
                usersLoading:false,
                successUsers:false,
                errorusers : true
            }
        break;

        case userActionType.USER_SIGNUP_REQUEST:
            return {

                ..._state,
                
                usernameSignup : action.payload.userame,

                emailSignup : action.payload.email,

                passwordSignup : action.payload.password,
                
                loadingSignup : true,

                roleSignup : action.payload.role


            }

        break;

        case userActionType.USER_SIGNUP_SUCCESS:
            return {

                ..._state,
                loadingSignup: false,
                successSignup : true
                
                
            }

        break;

        case userActionType.USER_SIGNUP_FAIL:
            return {

                ..._state,
                loadingSignup : false,
                errorSignup: action.payload
                
            }

        break;

        case userActionType.USER_SIGNUP_RESET :
            return {
                ..._state,
                loadingSignup : true,
                errorSignup : {},
                successSignup : false
            }


        case userActionType.USER_UPDATE_ADMIN_REQUEST :
            return {
                ..._state,
                
               loadingupdate : true
            }

        break;

        case userActionType.USER_UPATE_ADMIN_SUCCESS:
            return {

                ..._state,
                loadingupdate: false,
                successupdate: true
                
            }
        break;

        case userActionType.USER_UPATE_ADMIN_FAIL:
            return {

                ..._state,

                loadingupdate: false,

                errrorupdate: true

            }
        break;

        default: 
        return _state

       
        

    }
}

