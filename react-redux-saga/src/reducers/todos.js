import {TODOS_REQUEST,TODOS_GET_FAILURE,TODOS_GET_SUCCESS} from '../actions/actionTypes'
import {act} from "@testing-library/react";

let initialState = {
    isLoading: false,
    errors: '',
    todos: []
}

export default (state= initialState,action) => {
    switch(action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case TODOS_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case TODOS_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            }
        default: return state;
    }

}