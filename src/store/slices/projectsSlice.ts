import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    projects: [],
    project: ''
}

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state) => { state.project },
        editProject: (state) => { state.project },
        deleteProject: (state) => { state.project },
        getProjects: (state) => { state.projects }
    }
})

export const { addProject, editProject, deleteProject, getProjects } = projectSlice.actions
export default projectSlice.reducer