import { useState } from 'react';
import './App.css';


function App() {
 const [newItem, setNewItem] = useState("")
//  creating another state
const [todos, setTodos] =useState([])


 
// creating a function that prevents the page from refreshing anytime there is changes in the form input
  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return[
       ...currentTodos,
       {id: crypto.randomUUID(), title: newItem, completed: false}
      ] 
    })
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })

  }



 return (
  <>
  <form onSubmit={handleSubmit}
  className="new-item-form">
  <div className="form-row">
  <label htmlFor="item">New Item</label>
  <input 
  value={newItem} 
  onChange={e => setNewItem(e.target.value)} 
  type="text" 
  id="item" />
  </div>
  <button className="btn">Add</button>
  </form>

  <h1 className="header">Todo List Demo</h1>
  <ul className="list">
    {todos.map(todo => {
      return (
        <li key={todo.id}> 
        <label>
          <input type="checkbox" 
          checked={todo.completed} 
          onChange={e => toggleTodo(todo.id, e.target.checked)}
          />
          {todo.tittle}
        </label>
        <button className='btn'>Delete</button>
       </li>
      )
    })}
{/* 
    <li>
      <label>
        <input  type="checkbox" />
        Item 1
      </label>
      <button className="btn">Delete</button>

    </li>
    <li>
      <label>
        <input type="checkbox" />
        Item 2
      </label>
      <button className="btn">Delete</button>
    </li>

    <li>
      <label>
        <input type="checkbox" />
        Item 3
      </label>
      <button className="bton">Delete</button>
    </li>

    <li>
      <label>
        <input type="checkbox" />
        Item 4
      </label>
      <button className="btn" >Delete</button>
    </li>

  <li>
    <label>
      <input type="checkbox" />
      Item 5
    </label>
    <button className='btn'>Delete</button>
  </li> */}
  </ul>
  </>
  )
}

export default App;