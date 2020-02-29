import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Paper, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme=> ({
    root: {
        flexGrow: 1,
    },
    input: {
        color: 'white'
    }
}));

const ProjectForm = React.memo(props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredBody, setEnteredBody] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        props.onAddProject({title: enteredTitle, body: enteredBody});
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form onSubmit={submitHandler}>
            <Grid container direction="row" spacing={3} 
                    >
            
                <Grid item xs={6}>
                    
                
                    <TextField 
                    className={classes.input}
                    label="Title" 
                    variant="outlined" 
                    fullWidth
                    InputProps={enteredTitle}
                        onChange={event => {
                            setEnteredTitle(event.target.value);
                        }}
                        />
                
                <div className="form-control">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" value={enteredBody}
                        onChange={event => {
                            setEnteredBody(event.target.value);
                        }}></input>
                </div>
                </Grid>
                <Grid item xs={2}>
                
                    <IconButton type="submit">
                        <AddBoxIcon color="primary" fontSize="large" />
                    </IconButton>
                
                </Grid>
            </Grid>
            
            </form>
        </div>

    );
})

export default ProjectForm;