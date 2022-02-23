export interface Project {
    id: string,
    name: string,
    userId: string
}

export interface Task {
    id: string,
    title: string,
    archived: boolean,
    date: Date,
    projectId: string,
    userId: string
}

export interface User {
    id: string,
    userName: string,
    firstName: string,
    surname: string
}