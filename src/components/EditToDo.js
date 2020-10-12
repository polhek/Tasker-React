import { TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
export class EditToDo extends Component {
  constructor() {
    super();
    this.state = {
      showEditForm: false,
      edittask: '',
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit = () => {
    const { showEditForm } = this.state;
    this.setState({
      showEditForm: !showEditForm,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const tasks = this.props.tasks;
    const task = tasks.indexOf(this.props.task);
    tasks[task].name = this.state.edittask;
    this.setState({
      tasks: tasks,
      showEditForm: false,
    });
  };

  onChange = (e) => {
    this.setState({
      edittask: e.target.value,
    });
  };

  setStateTask = (taskName) => {
    this.setState({
      edittask: taskName,
    });
  };

  render() {
    const { tasks, deleteToDo, task } = this.props;
    return (
      <div>
        <li key={task.id}>
          <Box>
            <Typography variant="body2">
              {tasks.indexOf(task) + 1} {task.name}
              <IconButton
                onClick={() => deleteToDo(task.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  this.toggleEdit();
                  this.setStateTask(task.name);
                }}
              >
                <EditIcon />
              </IconButton>
            </Typography>
          </Box>

          {this.state.showEditForm && (
            <form onSubmit={this.onSubmit}>
              <div>
                <label htmlFor="editInput">
                  <Typography variant="h6">Edit task: </Typography>
                </label>
                <TextField
                  inputProps={{ style: { textAlign: 'center' } }}
                  onChange={this.onChange}
                  value={this.state.edittask}
                  id="editInput"
                  label="Edit task here..."
                  className="editInput"
                  type="text"
                  required
                  style={{ width: 350 }}
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
                  <Typography variant="button">Edit task</Typography>
                </Button>
              </Box>
            </form>
          )}
        </li>
      </div>
    );
  }
}

export default EditToDo;
