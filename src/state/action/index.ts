import { Interface } from "readline";
import { alertActionType, userActionType } from "../action-types";

import { courseActionType } from "../action-types";

//import { userSignupActionType } from "../action-types"

type userinfo1 = {
  email: string;

  password: string;
};

type userinfo = {
  email: string;

  password: string;

  success: boolean;

  //data : any
};

type userSignupInfo = {
  fullName: string;
  email: string;
  password: string;
};

type successLogin = {
  success: boolean;
};

interface userLoginRequest {
  type: userActionType.USER_LOGIN_REQUEST;

  payload?: any;
}

interface userLoginSuccess {
  type: userActionType.USER_LOGIN_SUCCESS;

  payload?: any;
}

interface userLoginFail {
  type: userActionType.USER_LOGIN_FAIL;

  payload?: any;
}

interface courseAssignRequest {
  type: courseActionType.COURSE_ASSIGN_REQUEST;

  payload?: any;
}

interface courseAssignSuccess {
  type: courseActionType.COURSE_ASSIGN_SUCCESS;

  payload?: any;
}

interface courseAssignFail {
  type: courseActionType.COURSE_ASSIGN_FAIL;

  payload?: any;
}

interface courseDeleteFromUserRequest {
  type: courseActionType.COURSE_DELETE_FROM_USER_REQUEST;

  payload?: any;
}

interface courseDeleteFromUserSuccess {
  type: courseActionType.COURSE_DELETE_FROM_USER_SUCCESS;

  payload?: any;
}

interface courseDeleteFromUserFail {
  type: courseActionType.COURSE_DELETE_FROM_USER_FAIL;

  payload?: any;
}

interface courseDeleteRequest {
  type: courseActionType.COURSE_DELETE_REQUEST;

  payload?: any;
}

interface courseDeleteSuccess {
  type: courseActionType.COURSE_DELETE_SUCCESS;

  payload?: any;
}

interface courseDeleteFail {
  type: courseActionType.COURSE_DELETE_FAIL;

  payload?: any;
}

interface usersListRequest {
  type: userActionType.USERS_LIST_REQUEST

  payload?: any
}

interface usersListSuccess {
  type: userActionType.USERS_LIST_SUCCESS

  payload?: any
}

interface usersListFail {
  type: userActionType.USERS_LIST_FAIL;

  payload?: any;
}

//signup
interface userSignupRequest {
  type: userActionType.USER_SIGNUP_REQUEST;
  payload?: any;
}

interface userSignupSuccess {
  type: userActionType.USER_SIGNUP_SUCCESS;
  payload?: any;
}

interface userSignupFail {
  type: userActionType.USER_SIGNUP_FAIL;
  payload?: any;
}

// GET PROJECTS OF USER action

interface getProjectsofUserRequest {
  type: userActionType.USER_SIGNUP_REQUEST;
  payload?: any;
}

interface getProjectsofUserSuccess {
  type: userActionType.USER_SIGNUP_SUCCESS;
  payload?: any;
}

interface getProjectsofUserFail {
  type: userActionType.USER_SIGNUP_FAIL;
  payload?: any;
}

interface getALLNotAssignedRequest {
  type: courseActionType.COURSE_NOT_ASSIGN_REQUEST;

  payload?: any;
}

interface getAllNotAssignedSuccess {
  type: courseActionType.COURSE_NOT_ASSIGN_SUCCESS;

  payload?: any;
}

interface getAllNotAssignedFail {
  type: courseActionType.COURSE_NOT_ASSIGN_FAIL;

  payload?: any;
}

interface assignProjectToUserRequest {
  type: userActionType.ASSIGN_PROJECT_REQUEST;

  payload?: any;
}

interface assignProjectToUserSuccess {
  type: userActionType.ASSIGN_PROJECT_SUCCESS;

  payload?: any;
}

interface assignProjectToUserFail {
  type: userActionType.ASSIGN_PROJECT_FAIL;
  payload?: any;
}

interface addProjectRequest {
  type: courseActionType.ADD_PROJECT_REQUEST;
  payload?: any;
}

interface addProjectSuccess {
  type: courseActionType.ADD_PROJECT_SUCCESS;
  payload?: any;
}

interface addProjectFail {
  type: courseActionType.ADD_PROJECT_FAIL;
  payload?: any;
}

interface setAlertype {
  type: alertActionType.SET_ALERT;
  payload?: any;
}

interface removeAlerttype {
  type: alertActionType.REMOVE_ALERT;
  payload?: any;
}

interface userUpdateAdminRequest {
  type: userActionType.USER_UPDATE_ADMIN_REQUEST;
  payload?: any;
}

interface userUpdateAdminSuccess {
  type: userActionType.USER_UPATE_ADMIN_SUCCESS;
  payload?: any;
}

interface userUpdateAdminFail {
  type: userActionType.USER_UPATE_ADMIN_FAIL;
  payload?: any;
}

interface deleteUserRequest {
  type: userActionType.DELETE_USER_REQUEST;

  payload?: any;
}

interface deleteUserSuccess {
  type: userActionType.DELETE_USER_SUCCESS;
  payload?: any;
}

interface deleteUserFail {
  type: userActionType.DELETE_USER_FAIL;

  payload?:any
}

interface userinforequest {
  type: userActionType.USER_INFO_REQUEST;

  payload?: any;
}

interface userinfosuccess {
  type: userActionType.USER_INFO_SUCCESS;
  payload?: any;
}

interface userinfofail {
  type: userActionType.USER_INFO_FAIL;

  payload?: any;
}

interface userDeleteRequest {
  type : userActionType.USER_DELETE_REQUEST,
  payload?: any
}

interface userDeleteSuccess {
  type : userActionType.USER_DELETE_SUCCESS,
  payload?: any
}

interface userDeleteFail {
  type : userActionType.USER_DELETE_FAIL,
  payload?: any
}

interface userInfoReset {
  type : userActionType.USER_INFO_RESET,
  payload?: any
}

interface getProjectUserRequest2 {

  type : userActionType.GET_PROJECTS_OF_USER_REQUEST,
  payload?: any
}

interface getProjectUserSuccess2 {

  type : userActionType.GET_PROJECTS_OF_USER_SUCCESS,
  payload?: any
}

interface getProjectUserFail2 {

  type : userActionType.GET_PROJECTS_OF_USER_FAIL,
  payload?: any
}

interface userSignupReset {

  type : userActionType.USER_SIGNUP_RESET,
  payload?: any
}

export type Action =
  | userLoginRequest
  | userLoginSuccess
  | userLoginFail
  | userSignupRequest
  | userSignupSuccess
  | userSignupFail
  | courseAssignRequest
  | courseAssignSuccess
  | courseAssignFail
  | courseDeleteFromUserRequest
  | courseDeleteFromUserSuccess
  | courseDeleteFromUserFail
  | courseDeleteRequest
  | courseDeleteSuccess
  | courseDeleteFail
  | usersListRequest
  | usersListSuccess
  | usersListFail
  | getProjectsofUserRequest
  | getProjectsofUserSuccess
  | getProjectsofUserFail
  | getALLNotAssignedRequest
  | getAllNotAssignedSuccess
  | getAllNotAssignedFail
  | assignProjectToUserFail
  | assignProjectToUserRequest
  | assignProjectToUserSuccess
  | addProjectRequest
  | addProjectSuccess
  | addProjectFail
  | setAlertype
  | removeAlerttype
  | userUpdateAdminRequest
  | userUpdateAdminSuccess
  | userUpdateAdminFail
  | deleteUserRequest
  | deleteUserSuccess
  | deleteUserFail
  | userinforequest
  | userinfosuccess
  | userinfofail
  | userDeleteRequest
  | userDeleteSuccess
  | userDeleteFail
  | userInfoReset
  | getProjectUserRequest2
  | getProjectUserSuccess2
  | getProjectUserFail2
  | userSignupReset;
