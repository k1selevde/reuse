import {takeEvery, call, put} from 'redux-saga/effects'
import { TODOS_REQUEST } from '../actions/actionTypes'
import {getTodosFailure, getTodosSuccess} from "../actions/todos";

function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
}

function* workerLoadTodos() {

    try {
        const data = yield call(fetchData)
        yield put(getTodosSuccess(data))
    } catch (e) {
        yield put(getTodosFailure(e));
    }

}

export function* watchLoadTodos() {
    yield takeEvery(TODOS_REQUEST, workerLoadTodos )
}