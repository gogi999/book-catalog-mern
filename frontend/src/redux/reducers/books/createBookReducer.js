import { CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAIL } from "../../actions/actionTypes"

const createBookReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_BOOK_REQUEST:
            return {
                loading: true
            }

        case CREATE_BOOK_SUCCESS:
            return {
                loading: false,
                book: action.payload
            }

        case CREATE_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default: 
            return state;
    }
}

export default createBookReducer
