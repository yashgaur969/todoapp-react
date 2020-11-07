import React, { useState } from 'react'
import './Todo.css';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemAvatar, Button, ListItemText, Modal} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Todo(props) {
    
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input, setInput] = useState('');
    
    const updateTodo = () => {
        //update the input with the updated text
        db.collection('todos').doc(props.todo.id).set({
        todo : input
        }, {merge: true})
        setOpen(false);
    }
    return (
        <div>
            <Modal
             open={open}
             onClose={e => setOpen(false)}>
              <div className={classes.paper}>
                <h1>I am a Modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}></input>
                <Button onClick={updateTodo} color='secondary'>Update Todo</Button>
            </div>
            </Modal>
           
            <List className="todo__List">
                <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="deadline"/>
                </ListItem>
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteIcon onClick={event=> db.collection('todos').doc(props.todo.id).delete()}/>
            </List>
            
        </div>
    )
}

export default Todo
