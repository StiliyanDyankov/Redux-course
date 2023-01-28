import React from "react";
import { useAppSelector } from "./app/hooks";
import { addTodo, removeTodo, updateTodo, deleteTodo } from "./app/todo/todo";

function App() {
    const todoList = useAppSelector((state) => state.todo);

    return (
        <h1>Hello</h1>
        
    );
}

export default App;
