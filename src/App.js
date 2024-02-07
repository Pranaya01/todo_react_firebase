import { useState } from 'react';
import { Button,FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import Todo from './Todo';

function App() {

  //todos variable is on array
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubish out', 'Pranay wants to master in react.js']);
  const [input, setInput] = useState('');
  console.log('🔫', input)

  const addTodo = (event) => {
      //this will fire off when we click the button
      event.preventDefault(); //will stop refresh
      console.log('👽', 'I am working on it');  
      setTodos([...todos, input]);
      setInput(''); //clear up the input after clicking add todo  button
  }

  return (
    <div className="App">
     <h1>Hello Pranay Pradhan🚀!</h1>
     <form>
     <FormControl>
      <InputLabel>✅ Write a Todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)}/>
    </FormControl>
     <Button disabled={ !input } variant="contained" color="primary" onClick={addTodo}>
     Add Todo
    </Button>
     </form> 
    {/* <button onClick={addTodo}>Add Todo</button> */}
    <ul>
      {todos.map(todo => (
        <Todo text={todo} />
      ))}
    </ul>

    </div>
  );
}

export default App;
