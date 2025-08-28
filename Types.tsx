export interface TodoInitialState {
    todos: TodoType[]
    completed?: boolean,
    checked?: boolean
}
export interface TodoType {
    id: number,
    content: string
    completed?: boolean,
    checked?: boolean
}