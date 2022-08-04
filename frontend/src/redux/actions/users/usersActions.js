import axios from 'axios';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_SUCCESS,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL
} from '../actionTypes';

export const registerUserAction = (name, email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            });
    
            const config = {
                'Content-Type': 'application/json'
            }
    
            const { data } = await axios.post('/api/users/register', { name, email, password }, config);
    
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            });

            // Save the user into local storage
            localStorage.setItem('userAuthData', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message
            });
        }      
    }
}

export const loginUserAction = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            });
    
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
    
            const { data } = await axios.post('/api/users/login', { email, password }, config);
    
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            });

            // Save the user into local storage
            localStorage.setItem('userAuthData', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message
            });
        }      
    }
}

export const logoutUserAction = () => async (dispatch) => {
    try {
        // Remove user from storage
        localStorage.removeItem('userAuthData');
        dispatch({
            type: USER_LOGOUT_SUCCESS
        });
    } catch (error) {
        
    }
}

export const getUserProfileAction = () => async (dispatch, getState) => {
    // Get the user token from store
    const { userInfo } = getState().userAuth;

    try {
        dispatch({
            type: USER_PROFILE_REQUEST
        });

        const config = {
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/users/profile', config);

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.response && error.response.data.message
        });
    }
}
