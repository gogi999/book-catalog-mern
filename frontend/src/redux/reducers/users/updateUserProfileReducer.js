import {
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL
} from '../../actions/actionTypes';

const updateUserProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST: 
            return {
                loading: true
            }

        case USER_UPDATE_SUCCESS: 
            return {
                loading: false,
                user: action.payload,
                success: true
            }

        case USER_UPDATE_FAIL: 
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default updateUserProfileReducer;
