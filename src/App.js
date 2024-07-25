import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import ReactiveButton from 'reactive-button';

import './App.css';

function App() {
  const [ todo, setTodo ] = useState({description:'', date:'', status: ''});
  const [ todos, setTodos ] = useState([]);

  const columnDefs = [
   {
      field: 'description',
      suppressMovable:true,
      sortable: true,
      filter:true
    },
    {
      field: 'date',
      suppressMovable:true,
      sortable: true,
      filter: true
    },
    {
      field: 'status',
      suppressMovable:true,
      sortable: true,
      filter: true
    },
  ];

  const inputChanged = (event)=>{
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () =>{
    setTodos([...todos, todo]);
    setTodo({description:'', date:'', status:''});
  }

  return (
    <div className="App">
      <input placeholder='Description' name='description' value={todo.description} onChange={inputChanged} />
      <input placeholder='Date' name='date' value={todo.date} onChange={inputChanged} />
      <input placeholder='Status' name='status' value={todo.status} onChange={inputChanged} />
      {/* <button onClick={addTodo}>Add</button> */}
      <ReactiveButton
        idleText="Add"
        size='tiny'
        rounded
        onClick={addTodo}
       />
      {/* <table>
        <tbody>
          {todos.map((todo, index)=>
          <tr key={index}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            <td>{todo.status}</td>
          </tr>
          )}
        </tbody>
      </table> */}

      <div 
        className='ag-theme-quartz'
        style={{height:600, width:600, margin:'auto'}}
      >
        <AgGridReact 
          rowData={todos} 
          columnDefs={columnDefs}
          animateRows={true}
          suppressMoveWhenRowDragging={true}
         />
      </div>
    </div>
  );
}

export default App;
