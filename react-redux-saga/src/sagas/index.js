import {takeEvery, call, put} from 'redux-saga/effects'
import { TODOS_REQUEST } from '../actions/actionTypes'
import {getTodosSuccess} from "../actions/todos";

function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
}

function* workerLoadTodos() {
    const data = yield call(fetchData)

    yield put(getTodosSuccess(data))
}

export function* watchLoadTodos() {
    yield takeEvery(TODOS_REQUEST, workerLoadTodos )
}