import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createBookReducer from '../reducers/books/createBookReducer';
import bookListReducer from '../reducers/books/bookListReducer';
import userAuthReducer from '../reducers/users/userAuthReducer';
import userProfileReducer from '../reducers/users/userProfileReducer';

const middlewares = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducer,
    bookList: bookListReducer,
    userAuth: userAuthReducer,
    userProfile: userProfileReducer
});

// Get user from localStorage and save it into our store
const userAuthFromStorage = localStorage.getItem('userAuthData')
    ? JSON.parse(localStorage.getItem('userAuthData'))
    : null;

const initialState = {
    userAuth: {
        userInfo: userAuthFromStorage
    }
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
