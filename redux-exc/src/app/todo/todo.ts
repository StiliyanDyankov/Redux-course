import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todoTask {
    index: string;
    desc: string;
    completed: boolean;
}

const list: todoTask[] = [];

export const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        list: list,
        input: "",
    },
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const i = Date.now().toString();
            state.list.push({
                index: i,
                desc: action.payload,
                completed: false,
            });
            state.input = "";
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((t) => t.index !== action.payload);
        },
        updateTodo: (state, action: PayloadAction<todoTask>) => {
            let i = state.list.findIndex(
                (t) => t.index === action.payload.index
            );
            state.list[i] = action.payload;
        },
        input: (state, action: PayloadAction<string>) => {
            state.input = action.payload;
        },
    },
});

export const { addTodo, removeTodo, updateTodo, input } = todoSlice.actions;

export default todoSlice.reducer;
