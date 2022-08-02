import { FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, FETCH_BOOK_FAIL } from '../../actions/actionTypes';

const bookListReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_BOOK_REQUEST:
            return {
                loading: true
            }

        case FETCH_BOOK_SUCCESS:
            return {
                loading: false,
                books: action.payload
            }

        case FETCH_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default: 
            return state;
    }
}

export default bookListReducer;
