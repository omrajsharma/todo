import React from 'react'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'
import { Container } from '@mui/material'
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([])

  const fetchTodos = async () => {
    const response = await fetch('https://todo-ad070-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json')
    const data = await response.json()
    let todosBuilder = [];
    for (const key in data) {
        todosBuilder.push({
            id: key,
            ...data[key]
        })
    }
    console.log(todosBuilder)
    todosBuilder.reverse()
    setTodos(todosBuilder)
  }

  React.useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <Container maxWidth="md">
      <CreateTodo fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </Container>
  )
}

export default App
