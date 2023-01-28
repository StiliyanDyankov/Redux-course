import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todoTask {
    index: number;
    desc: string;
    completed: boolean;
}

const todoList: todoTask[] = [];

export const todoSlice = createSlice({
    name: "todoList",
    initialState: todoList,
    reducers: {
        addTodo: (state, action: PayloadAction<todoTask>) => {
            state.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state = state.filter((t) => t.index !== action.payload);
        },
        updateTodo: (state, action: PayloadAction<todoTask>) => {
            state[action.payload.index] = action.payload;
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state = state.slice(action.payload, 0);
        },
    },
});

export const { addTodo, removeTodo, updateTodo, deleteTodo } =
    todoSlice.actions;

export default todoSlice.reducer;
