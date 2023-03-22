import { Dispatch } from "react"
import { Action } from "../action"


import { alertActionType, courseActionType, userActionType} from "../action-types"

//import { v4 as uuidv4 } from 'uuid';

export const userLoginRequestAction: any= (username : string, password: string) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USER_LOGIN_REQUEST,

            payload : {user :username, pass: password}
      })
    }
}

export const userLoginSuccessAction: any= (result : any) => {

    //return (dispatch: Dispatch<Action>) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USER_LOGIN_SUCCESS,

            payload : result
      })
    }
}

export const userLoginFailAction: any= () => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USER_LOGIN_FAIL
        })
    }
}





export const courseAssignRequestAction: any= (course_name : string,user_id : string) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_ASSIGN_REQUEST,

            payload : {courseName: course_name,userAssignId : user_id}
      })
    }
}

export const courseAssignSuccessAction: any= (dispatch: Dispatch<Action>) => {

    //return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_ASSIGN_SUCCESS
        })
   // }
}

export const courseAssignFailAction: any= () => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_ASSIGN_FAIL
        })
    }
}


export const courseDeleteFromUserRequestAction: any= (course_name:string,user_id:string) => {


    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_FROM_USER_REQUEST,

            payload: {course_name,user_id}
        })
    }
}

export const courseDeleteFromUserSuccessAction: any= (course_name:string,user_id:string) => {


    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_FROM_USER_SUCCESS
        })
    }
}

export const courseDeleteFromUserFailAction: any= (course_name:string,user_id:string) => {


    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_FROM_USER_FAIL
        })
    }
}



export const courseDeleteRequestAction: any= (course_id : string) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_REQUEST,

            payload : {course_id}
      })
    }
}

export const courseDeleteSuccessAction: any= (dispatch: Dispatch<Action>) => {

    //return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_SUCCESS
        })
   // }
}

export const courseDeleteFailAction: any= () => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_FAIL
        })
    }
}

export const UsersListRequestAction : any = () => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USERS_LIST_REQUEST
        })
    }
}

export const UsersListSuccessAction : any = (users : []) => {

    return (dispath : Dispatch<Action>) => {

        dispath({

            type: userActionType.USERS_LIST_SUCCESS,

            payload : users
        })
    }
}

export const UsersListErrorAction : any = () => {

    return (dispath : Dispatch<Action>) => {

        dispath({

            type: userActionType.USERS_LIST_FAIL
        })
    }
}

//signup
export const userSignupRequestAction: any= (username : string, email : string, password: string, role : string) => {
    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USER_SIGNUP_REQUEST,
            payload : {
                username : username, 
                email : email, 
                password: password,
                role : role
            }
      })
    }
}

// export const userSignupSuccessAction: any= (dispatch: Dispatch<Action>) => {

//     console.log(" userSignupSuccessAction", "heyy")
//     //return (dispatch: Dispatch<Action>) => {
       

//     return () => {

//         dispatch({
                
//                 type: userActionType.USER_SIGNUP_SUCCESS
//             })
//         }
//     }
    


export const userSignupFailAction: any= () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
                
                type: userActionType.USER_SIGNUP_FAIL
            })
        }
    }


    export const NotActiveProjectRequest : any = () => {
        return (dispatch: Dispatch<Action>) => {
            dispatch({
                    
                    type: courseActionType.COURSE_NOT_ASSIGN_REQUEST
                })
            }
        }

        export const NotActiveProjectSuccess : any = (notactiveprojects : []) => {
            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.COURSE_NOT_ASSIGN_SUCCESS,

                        payload : notactiveprojects
                    })
                }
            }

            
        export const NotActiveProjectFail : any = () => {
            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.COURSE_NOT_ASSIGN_FAIL
                    })
                }
            }

        // project assign reducers
            
        export const AssignProjectRequest : any = (userid : string,courseid : string) => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.ASSIGN_PROJECT_REQUEST,

                        payload : {userid,courseid}
                    })
                }
        }

        export const AssignProjectRequestFail : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.ASSIGN_PROJECT_FAIL
                    })
                }

        }

        export const AssignProjectRequestSuccess : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.ASSIGN_PROJECT_SUCCESS
                    })
                }

        }

        export const courseAddRequestAction : any = (name : string,assignee_id : string) => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.ADD_PROJECT_REQUEST,

                        payload : {name, assignee_id}
                    })
                }
        }

        export const courseAddRequestSuccess : any = () => {

            console.log("courseaddrequestsuccess")
            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.ADD_PROJECT_SUCCESS
                    })
                }
        }

        
        export const courseAddRequestFail : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.ADD_PROJECT_FAIL
                    })
                }
        }

        export const alertset : any = (msg : string,alertType : string) => {

            return (dispatch: Dispatch<Action>) => {

                const id = "234"
                
                dispatch({
                        
                        type: alertActionType.SET_ALERT,
                        payload : {msg,alertType,id}
                    });

                    setTimeout(() => {
                        dispatch({
                            type : alertActionType.REMOVE_ALERT,

                            payload: {id}
                        })
                    },3000)
                }
        }


        export const userUpdateAdminActionRequest : any = (id : string) => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.USER_UPDATE_ADMIN_REQUEST,

                        payload : {id}
                    })
                }
        }

        export const deleteUserActionRequest : any = (id : string) => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.DELETE_USER_REQUEST,

                        payload : {id}
                    })
                }
        }

        export const deleteUserActionSuccess : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.DELETE_USER_SUCCESS
                    })
                }

        }

        export const deleteUserActionFail : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.DELETE_USER_FAIL
                    })
                }

        }

        
        export const userUpdateAdminActionSuccess : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.USER_UPATE_ADMIN_SUCCESS

                        
                    })
                }
        }

        
        export const userUpdateAdminActionFail : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.USER_UPATE_ADMIN_FAIL

                        
                    })
                }
        }

        export const userinfoRequest : any = (id : string) => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.USER_INFO_REQUEST,

                        payload : {id}
                        
                    })
                }
        }

        export const userinfoFail : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.USER_INFO_FAIL
                        
                    })
                }
        }

        export const userinfoSuccess : any = (datas : any) => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.USER_INFO_SUCCESS,

                        payload : datas
                        
                    })
                }

        }

       
// DELETE USER
export const userDeleteRequestAction : any = (id : string) => {

    return (dispatch: Dispatch<Action>) => {
        dispatch({
                
                type: userActionType.USER_DELETE_REQUEST,

                payload : {id}
            })
        }
}


export const userDeleteSuccessAction : any = () => {

    return (dispatch: Dispatch<Action>) => {
        dispatch({
                
                type: userActionType.USER_DELETE_SUCCESS
            })
        }
}


export const userDeleteFailAction : any = () => {

    return (dispatch: Dispatch<Action>) => {
        dispatch({
                
                type: userActionType.USER_DELETE_FAIL
            })
        }
}

export const getProjectsOfUserRequestAction : any = (id : string)  => {

    return (dispatch: Dispatch<Action>) => {
        dispatch({
                
                type: userActionType.GET_PROJECTS_OF_USER_REQUEST,
                payload : {id}
                         
        })
}
}

export const getProjectsOfUserSuccessAction : any = (datas : any)  => {

    return (dispatch: Dispatch<Action>) => {
        dispatch({
                
                type: userActionType.GET_PROJECTS_OF_USER_SUCCESS,
                payload : datas
            })
        }
}


export const getProjectsOfUserFailAction : any = ()  => {

    return (dispatch: Dispatch<Action>) => {
        dispatch({
                
                type: userActionType.GET_PROJECTS_OF_USER_FAIL,
                
            })
        }
}



    // get projects of user 


   


