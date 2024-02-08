import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar/>
        </ListItemAvatar>
        <ListItemText primary="Todo" secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default Todo;
