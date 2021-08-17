import{
    ACTIVATE_TWOFACTOR,
    ACTIVATE_TWOFACTOR_SUCCESS,
    ACTIVATE_TWOFACTOR_FAILURE
}from"./TwoFactorTypes"

const initialState = {
    user_data: [],
    message:'',
    activate_twofactor:false,
    barCode:null,
    otpauth_url:null,
    error:false,
    success:false,
};

const ActivtateTwoFactorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_TWOFACTOR:
            return {
                ...state,
                user_data: [],
                message:action.message,
                activate_twofactor:true,
                barCode:null,
                error:false,
                success:false,
            };
        case ACTIVATE_TWOFACTOR_SUCCESS:
            return {
                ...state,
                user_data: [],
                message:action.message,
                activate_twofactor:true,
                barCode:action.payload,
                otpauth_url:action.otpauth_url,
                error:false,
                success:true,
            };
        case ACTIVATE_TWOFACTOR_FAILURE:
            return {
                ...state,
                message:action.message,
                activate_twofactor:false,
                error:true,
                success:false,
            };
        default:
            return state;
    }
};

export default ActivtateTwoFactorReducer;