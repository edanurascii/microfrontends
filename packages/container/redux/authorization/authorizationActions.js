import {
    // GET_USER_BY_USERID_REQUEST,
    // GET_USER_BY_USERID_SUCCESS,
    // GET_USER_BY_USERID_FAILURE,
    SET_AUTHORIZATION,
    TEST_REDUX_CHANGE
} from './authorizationActionTypes'

// export const getUserByUserIdRequest = () => {
//     return {
//         type: GET_USER_BY_USERID_REQUEST
//     }
// }
// export const getUserByUserIdSuccess = userData => {
//     return {
//         type: GET_USER_BY_USERID_SUCCESS,
//         payload: userData
//     }
// }
// export const getUserByUserIdFailure = error => {
//     return {
//         type: GET_USER_BY_USERID_FAILURE,
//         payload: error
//     }
// }

export const setAuthorization = isLoggedIn => {
    return {
        type: SET_AUTHORIZATION,
        payload: isLoggedIn
    }
}

export const setTestReduxChange = () => {
    return {
        type: TEST_REDUX_CHANGE
    }
}
