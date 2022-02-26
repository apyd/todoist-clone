import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
    task: ''
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state) => { state.task },
        editTask: (state) => { state.task },
        deleteTask: (state) => { state.task },
        getTasks: (state) => { state.tasks }
    }
})

export const { addTask, editTask, deleteTask, getTasks } = tasksSlice.actions
export default tasksSlice.reducer