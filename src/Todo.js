import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import './Todo.css'

function Todo(props) {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemAvatar>
          <Avatar/>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy Deadline⏰" />
      </ListItem>
    </List>
  );
}

export default Todo;
