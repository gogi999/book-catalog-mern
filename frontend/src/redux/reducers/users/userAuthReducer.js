import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_SUCCESS
} from '../../actions/actionTypes';

const userAuthReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST: 
            return {
                loading: true
            }

        case USER_REGISTER_SUCCESS: 
            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_REGISTER_FAIL: 
            return {
                loading: false,
                error: action.payload
            }

        case USER_LOGIN_REQUEST: 
            return {
                loading: true
            }

        case USER_LOGIN_SUCCESS: 
            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_LOGIN_FAIL: 
            return {
                loading: false,
                error: action.payload
            }

        case USER_LOGOUT_SUCCESS:
            return {};

        default:
            return state;
    }
}

export default userAuthReducer;
