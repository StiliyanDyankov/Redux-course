import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todoTask {
    index: number;
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
            // let i = state.list.length-1;
            state.list.push({
                index: state.list.length,
                desc: action.payload,
                completed: false
            });
            state.input = "";
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(
                (t) => t.index !== action.payload
            );
        },
        updateTodo: (state, action: PayloadAction<todoTask>) => {
            state.list[action.payload.index] = action.payload;
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.list.splice(action.payload, 1);
        },
        input: (state, action: PayloadAction<string>) => {
            state.input = action.payload;
        },
    },
});

export const { addTodo, removeTodo, updateTodo, deleteTodo, input } =
    todoSlice.actions;

export default todoSlice.reducer;
