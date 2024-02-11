import { useEffect, useState } from 'react';
import { Button,FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import Todo from './Todo';
import db from './firebase';



function App() {

  //todos variable is on array
  const [todos, setTodos] = useState(['abc', 'def']);
  const [input, setInput] = useState('');

  //when the app loads, we need too  listen to the database and  fetch new todos as they get added/removed
  useEffect(() => {
    //this codes here.... fires when the app.js loads
    db.collection('todo').onSnapshot((snapshot) => {
      console.log(setTodos(snapshot.docs.map(doc => doc.data().todo)));
        setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

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
