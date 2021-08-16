import {VERIFY_EMAIL_LOADING, VERIFY_EMAIL_SUCCESS,VERIFY_EMAIL_FAILURE, VERIFY_PHONE_LOADING, VERIFY_PHONE_SUCCESS, VERIFY_PHONE_FAILURE, RESET_TWO_FACTOR_DEATIVATION_STATE, VERIFY_EMAIL_TOKEN_LOADING, VERIFY_EMAIL_TOKEN_SUCCESS, VERIFY_EMAIL_TOKEN_FAILURE, VERIFY_PHONE_TOKEN_LOADING, VERIFY_PHONE_TOKEN_SUCCESS, VERIFY_PHONE_TOKEN_FAILURE} from "./TwoFactorDeactivationTypes";

const initialState = {
    verify_email_loading:false,
    verify_email_token_loading:false,

    verify_phone_loading:false,
    verify_phone_token_loading:false,

    error:false,
    success:false,

    message:null,
    email:null,

    verify_email_status:false,
    verify_email_token_status:false,

    verify_phone_status:false,
    verify_phone_token_status:false,
}

const TwoFactorDeactivationReducer = (state = initialState, action) => {

    switch (action.type) {
        case VERIFY_EMAIL_LOADING:
            return {
                ...state,
                verify_email_loading:true,
                verify_email_token_loading:false,

                verify_phone_loading:false,
                verify_phone_token_loading:false,

                error:false,
                success:false,

                message:action.message,
                email:null,

                verify_email_status:false,
                verify_email_token_status:false,

                verify_phone_status:false,
                verify_phone_token_status:false,
            };

        case VERIFY_EMAIL_FAILURE:
            return {
                ...state,
                verify_email_loading:false,
                verify_email_token_loading:false,

                verify_phone_loading:false,
                verify_phone_token_loading:false,

                error:true,
                success:false,

                message:action.message,
                email:null,

                verify_email_status:false,
                verify_email_token_status:false,

                verify_phone_status:false,
                verify_phone_token_status:false
            };

        case VERIFY_EMAIL_SUCCESS:
            return {
                ...state,
                verify_email_loading:false,
                verify_email_token_loading:false,

                verify_phone_loading:false,
                verify_phone_token_loading:false,

                error:false,
                success:true,

                message:action.message,
                email:action.payload,

                verify_email_status:true,
                verify_email_token_status:false,

                verify_phone_status:false,
                verify_phone_token_status:false
            };

        //...validate the code sent to the email
        case VERIFY_EMAIL_TOKEN_LOADING:
            return {
                ...state,
                verify_email_loading:false,
                verify_email_token_loading:true,

                verify_phone_loading:false,
                verify_phone_token_loading:false,

                error:false,
                success:false,

                message:action.message,

                verify_email_token_status:false,

                verify_phone_status:false,
                verify_phone_token_status:false,
            };
        case VERIFY_EMAIL_TOKEN_SUCCESS:
            return {
                ...state,
                verify_email_loading:false,
                verify_email_token_loading:false,

                verify_phone_loading:false,
                verify_phone_token_loading:false,

                error:false,
                success:true,

                message:action.message,
                email:null,

                verify_email_token_status:true,

                verify_phone_status:false,
                verify_phone_token_status:false
            };

        case VERIFY_EMAIL_TOKEN_FAILURE:
            return {
                ...state,
                verify_email_loading:false,
                verify_email_token_loading:false,

                verify_phone_loading:false,
                verify_phone_token_loading:false,

                error:true,
                success:false,

                message:action.message,
                email:action.payload,

                verify_email_status:true,
                verify_email_token_status:false,

                verify_phone_status:false,
                verify_phone_token_status:false
            };
        //...validate the code sent to the email

        case VERIFY_PHONE_LOADING:
            return {
                ...state,
                verify_phone_loading:true,

                error:false,
                success:false,

                message:action.message,

                verify_phone_status:false,
            };
        case VERIFY_PHONE_SUCCESS:
            return {
                ...state,
                verify_phone_loading:false,

                error:false,
                success:true,

                message:action.message,

                verify_phone_status:true,
            };
        case VERIFY_PHONE_FAILURE:
            return {
                ...state,
                verify_phone_loading:false,

                error:true,
                success:false,

                message:action.message,

                verify_phone_status:false,
            };

        case RESET_TWO_FACTOR_DEATIVATION_STATE:
            return{
                verify_email_loading:false,
                verify_phone_loading:false,

                error:false,
                success:false,

                message:null,
                email:null,

                verify_email_status:false,
                verify_phone_status:true,
            }

        default:
            return state;
    }
};

export default TwoFactorDeactivationReducer;