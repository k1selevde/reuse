import React from 'react'
import {getTodosRequest} from "../actions/todos";
import { useDispatch } from "react-redux";

const Todos  = ({todos}) => {
    const dispatch = useDispatch();
    const getTodos = () => dispatch(getTodosRequest());
    return (
        <>
            <h3>Fake todos from jsonplaceholder server</h3>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <span>completed: {todo.completed}</span>
                        <p>name {todo.title}</p>
                    </li>
                ))}
            </ul>
            <button onClick={getTodos}>GET todos!</button>
        </>
    );
}

export default Todos;