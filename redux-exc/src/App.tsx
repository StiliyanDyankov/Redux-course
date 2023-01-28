import React, { Fragment } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
    addTodo,
    removeTodo,
    updateTodo,
    deleteTodo,
    input,
} from "./app/todo/todo";

function App() {
    const todo = useAppSelector((state) => state.todo);

    const dispatch = useAppDispatch();

    return (
        <React.Fragment>
            <h1>Hello</h1>
            <div className="p-2 bg-light">
                <div className="m-2">
                    <span className="me-2">Number of tasks:</span>
                    <span className="badge bg-success">{todo.list.length}</span>
                </div>
                <div className="m-2 d-inline-flex">
                    <input
                        type="text"
                        value={todo.input}
                        className="form-control"
                        onChange={(e) => {
                            dispatch(input(e.target.value));
                        }}
                    />
                    <button
                        className={`ms-2 btn btn-success${
                            todo.input === "" ? " disabled" : ""
                        }`}
                        disabled
                        onClick={() => {
                            dispatch(addTodo(todo.input));
                        }}
                    >
                        Add
                    </button>
                </div>
                <div className="m-2">
                    <div className="fw-bold">Tasks:</div>
                    {todo.list.map((t) => (
                        <div className="m-2 p-1 bg-info d-inline-flex">
                            <button
                                className={`m-1 badge${
                                    t.completed ? " bg-success" : " bg-danger"
                                }`}
                                onClick={() => {
                                    t.completed = !t.completed;
                                    dispatch(updateTodo(t));
                                }}
                            ></button>
                            <span className="m-1 fw-bold">{t.desc}</span>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    dispatch(removeTodo(t.index));
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
