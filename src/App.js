import React, { Component } from 'react';
import './App.css';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import Container from '@material-ui/core/Container';
import { Box, CssBaseline, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      task: '',
      tasks: [],
    };
  }

  classes = () => {
    useStyles();
  };

  onChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: uniqid(), name: this.state.task };
    this.setState({
      tasks: this.state.tasks.concat(task),
      task: '',
    });
  };

  deleteToDo = (id) => {
    const newList = this.state.tasks.filter((item) => item.id !== id);
    this.setState({
      tasks: newList,
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <React.Fragment bgcolor="primary.main">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={this.classes.root}>
            <AppBar align="center" position="static" color="inherit" width={1}>
              <Typography variant="h4" className={this.classes.title}>
                React - Tasker
              </Typography>
            </AppBar>
            <ThemeProvider theme={theme}>
              <Container align="center" maxWidth="lg">
                <Box marginTop="20px">
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <label htmlFor="taskInput">
                        <Typography variant="h6">Add task: </Typography>
                      </label>
                      <TextField
                        onChange={this.onChange}
                        value={task}
                        id="taskInput"
                        label="Add task here"
                        placeholder="Here you add task you want to add..."
                        className="taskInput"
                        type="text"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' } }}
                        required
                      ></TextField>
                    </div>
                    <Box marginTop="20px">
                      <Button
                        mt={20}
                        type="submit"
                        color="palette.action.active"
                        variant="contained"
                        className="button"
                      >
                        <Typography variant="button">Submit task</Typography>
                      </Button>
                    </Box>
                  </form>
                </Box>

                <Overview
                  tasks={tasks}
                  deleteToDo={this.deleteToDo}
                  editToDo={this.editToDo}
                  onChange={this.onChange}
                />
              </Container>
            </ThemeProvider>
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
