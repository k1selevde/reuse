import {TODOS_REQUEST,TODOS_GET_SUCCESS,TODOS_GET_FAILURE} from './actionTypes'

export const getTodosRequest = () => {
    return {
        type: TODOS_REQUEST
    }
}

export const getTodosSuccess = (data) => {
    return {
        type: TODOS_GET_SUCCESS,
        payload: data
    }
}

export const getTodosFailure = (data) => {
    return {
        type: TODOS_GET_FAILURE,
        payload: data
    }
}

