import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  SELECT_ONE_USER,
  SELECT_ONE_USER_SUCCESS,
  SELECT_ONE_USER_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  RESET_USERS_STATE
} from "./UserTypes";

const initialState = {
  message: "",
  loading: false,
  delete_loading: false,
  allUsers: [],
  singleUser: [],
  error: false,
  success: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        allUsers: action.payload,
        error: false,
        success: true,
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };
    case SELECT_ONE_USER:
      return {
        ...state,
        message: action.message,
        loading: true,
        error: false,
        success: false,
      };
    case SELECT_ONE_USER_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        singleUser: action.payload,
        error: false,
        success: true,
      };
    case SELECT_ONE_USER_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
        error: true,
        success: false,
      };
    case DELETE_USER:
      return {
        ...state,
        message: action.message,
        loading: false,
        delete_loading:true,
        error: false,
        success: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
        allUsers:action.payload,
        delete_loading:false,
        error: false,
        success: true,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        message: action.message,
        delete_loading:false,
        loading: false,
        error: true,
        success: false,
      };
    case RESET_USERS_STATE:
      return {
        ...state,
        message: "",
        loading: false,
        delete_loading: false,
        allUsers: [],
        singleUser: [],
        error: false,
        success: false,
      };
    default:
      return state;
  }
};

export default UserReducer;