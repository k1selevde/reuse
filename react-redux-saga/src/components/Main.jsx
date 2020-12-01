import React from 'react'
import FakeTodos from './Todos.jsx'
import Todos from "./Todos.jsx";
import {connect} from 'react-redux'

const Main  = ({todos}) => {
    return (
        <>
            <h1>Main page</h1>
            <Todos todos={todos}/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps,null)(Main);