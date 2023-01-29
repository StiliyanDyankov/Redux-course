import React from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
    addTodo,
    removeTodo,
    updateTodo,
    input,
} from "./app/todo/todo";

function App() {
    const todo = useAppSelector((state) => state.todo);

    const dispatch = useAppDispatch();

    return (
        <React.Fragment>
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
                        onClick={() => {
                            dispatch(addTodo(todo.input));
                        }}
                    >
                        Add
                    </button>
                </div>
                <div className="m-2 d-flex flex-column">
                    <div className="fw-bold">Tasks:</div>
                    {todo.list.map((t, i) => (
                        <div
                            key={i}
                            className="m-2 p-2 bg-secondary rounded d-inline-flex justify-content-between"
                        >
                            <button
                                className={`m-1 btn ${
                                    t.completed ? " btn-success" : " btn-danger"
                                }`}
                                onClick={() => {
                                    let arg = { ...t };
                                    arg.completed = !arg.completed;
                                    dispatch(updateTodo(arg));
                                }}
                            >
                                {" "}
                            </button>
                            <span className="m-1 fw-bold">{t.desc}</span>
                            <button
                                className="btn btn-danger align-self-end"
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
