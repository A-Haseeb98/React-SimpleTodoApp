import './App.css';
import { Button, Input } from './Component'
import { useState } from 'react'


function App() {

  const [value, setValue] = useState('Haseeb')
  const [todos, setTodo] = useState(['1', '2', '3'])

  let editTodo = (key) => {
    console.log('h w', key)
  }

  let deleteTodo = (key) => {
    console.log('h w', key)

    let arr = [...todos]
    arr.splice(key, 1)
    setTodo(arr)
  }

  let deleteAllTodos = () => {
    setTodo([])
  }

  let addTodo = () => {
    let arr = [...todos]
    arr.push(value)
    setTodo(arr)
    console.log(todos)
  }
  return (
    <div className='container'>
<h1>TODO APP </h1>
      
      <Input  placeholder='Enter Here' onChange={(e) => setValue(e.target.value)} type='text' />
      <Button onClick={addTodo}>Add</Button>
      <Button onClick={deleteAllTodos}>Delete All</Button>

      <ul className='todoList'>
        {todos.map((value, index) => {
          return (
            <li key={index}> <small className='todo'>{value}</small>   <Button onClick={() => editTodo(index)}>Edit</Button> <Button onClick={() => deleteTodo(index)}>Delete</Button> </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
