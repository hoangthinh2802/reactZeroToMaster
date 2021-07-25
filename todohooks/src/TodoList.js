import { Divider, List, ListItem, ListItemText, Paper } from "@material-ui/core"
import React from "react"
import Todo from "./Todo"
function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    if (todos.length)
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                    <Todo 
                        id={todo.id}
                        task={todo.task} 
                        key={todo.id} 
                        completed={todo.completed} 
                        removeTodo = {removeTodo}
                        toggleTodo = {toggleTodo}
                        editTodo = {editTodo}
                    />
                    <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    )
    return null;
}
export default TodoList