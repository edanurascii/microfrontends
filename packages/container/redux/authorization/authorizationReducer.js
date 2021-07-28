import {
  // GET_USER_BY_USERID_REQUEST,
  // GET_USER_BY_USERID_SUCCESS,
  // GET_USER_BY_USERID_FAILURE,
} from "./authorizationActionTypes"

// initial state
const initialState = {
  userContext: {
    Id: null
  },
  userDataLoading: false,
  userDataError: '',
}

// Objective Reducer
const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_USER_BY_USERID_REQUEST:
    //   return {
    //     ...state,
    //     userDataLoading: true
    //   }
    // case GET_USER_BY_USERID_SUCCESS:
    //   const userResult = {
    //     ...state,
    //     userDataLoading: false,
    //     userContext: {
    //       ...state.userContext,
    //       ...action.payload
    //     },
    //     userDataError: ""
    //   }
    //   return userResult
    // case GET_USER_BY_USERID_FAILURE:
    //   return {
    //     ...state,
    //     userDataLoading: false,
    //     userContext: {},
    //     userDataError: action.payload
    //   }

    default:
      return state
  }
}

export default authorizationReducer