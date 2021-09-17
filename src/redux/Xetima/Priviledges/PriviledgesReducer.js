import{
    GET_ALL_PRIVILEDGES,
    GET_ALL_PRIVILEDGES_SUCCESS,
    GET_ALL_PRIVILEDGES_FAIL,
    UPDATE_PRIVILEDGES,
    UPDATE_PRIVILEDGES_SUCCESS,
    UPDATE_PRIVILEDGES_FAIL,
    RESET_PRIVILEDGES_STATE
}from './PriviledgesTypes'

const initialState = {
    message: "",
    loading: false,
    allPriviledges: [],
    error: false,
    success: false,
  };


  const PriviledgeReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PRIVILEDGES:
        return {
          ...state,
          message: action.message,
          loading: true,
          error: false,
          success: false,
        };
      case GET_ALL_PRIVILEDGES_SUCCESS:
        return {
          ...state,
          message: action.message,
          loading: false,
          allPriviledges: action.payload,
          error: false,
          success: true,
        };
      case GET_ALL_PRIVILEDGES_FAIL:
        return {
          ...state,
          message: action.message,
          loading: false,
          error: true,
          success: false,
        };
      case RESET_PRIVILEDGES_STATE:
        return {
          ...state,
          message: "",
          loading: false,
          allPriviledges: [],
          error: false,
          success: false,
        };
  
      default:
        return state;
    }
  };
  
  export default PriviledgeReducer;