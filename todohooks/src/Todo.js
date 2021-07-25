import React from "react"
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core"
import { Checkbox } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import useToggle from "./hooks/useToggleState"
import EditTodoForm from "./EditTodoForm"


export default function Todo({task, completed, removeTodo, id, toggleTodo, editTodo}) {
    const[isEditing, toggle] = useToggle(false);
    return (
        <ListItem>
            {isEditing ? (<EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>) :
                (
                    <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                    <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-lable="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-lable="Edit" onClick={toggle}>
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                    </>
                )
            }
        </ListItem>
    )
}