import { all } from "redux-saga/effects";

import { userSagas } from "./userSaga";

import { courseSagas } from "./courseSaga";

import { userListsSagas } from "./usersListSaga";

import { fork } from "redux-saga/effects";

import { AdduserSaga } from "./addUserSaga";

import { coursenotassignedSaga } from "./courseNotAssign";

import { userCoursesSagas } from "./useCoursesSaga";
import { AddprojectSaga } from "./addProjectSaga";
import { updateAdminSaga } from "./updateAdminSaga";
import { userDeleteSaga } from './deleteUserSaga';

import { userinfoSagas } from "./getUserSaga";
function* watchrootSaga() {}

const rootSaga = function* rootSaga() {
  const sagas = [userSagas, courseSagas];

  yield all([
    fork(userSagas),
    fork(courseSagas),
    fork(updateAdminSaga),
    fork(userListsSagas),
    fork(AdduserSaga),
    fork(coursenotassignedSaga),
    fork(AddprojectSaga),
    fork(userinfoSagas),
    fork(userDeleteSaga),
    fork(userCoursesSagas)
  ]);
};

export default rootSaga;
