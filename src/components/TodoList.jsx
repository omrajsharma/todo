import React, { useEffect } from 'react'
import { Checkbox, Typography, Button, IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function TodoList({ todos }) {
  return (
    <div className='todos'>
        {   
            todos.length > 0
            ? (
                <div className='todos-container'>
                    {   
                        todos.map((todo) => {
                            return (
                                <div key={todo.id} className='todo'>
                                    <div className="todo-left">
                                        <div className="todo-done">
                                            <Checkbox
                                                checked={todo.isCompleted}
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                        </div>
                                        <div className="todo-detail">
                                            <Typography variant="h6" component="div">
                                                {todo.title}
                                            </Typography>
                                            <Typography variant="body2" component="div">
                                                {todo.description}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="todo-right">
                                        <div className="todo-delete">
                                            <IconButton>
                                                <DeleteForeverIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                    {/* <div>{todo.priority}</div>
                                    <div>{todo.dueDate}</div>
                                    <div>{todo.isCompleted}</div> */}
                                </div>
                            )
                        })   
                    }
                </div>
            )
            : <div>No todos</div>
        }
    </div>
  )
}

export default TodoList
