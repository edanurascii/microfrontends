import {
    TEST_REDUX_CHANGE
  } from "./testActionTypes"

  // initial state
  const initialState = {
    testMarketingVariable: false,
  }

  const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case TEST_REDUX_CHANGE:
        return {
          ...state,
          testMarketingVariable: true
        }
  
      default:
        return state
    }
  }

  export default testReducer