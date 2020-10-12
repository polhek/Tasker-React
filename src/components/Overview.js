import { List } from '@material-ui/core';
import React, { Component } from 'react';
import EditToDo from './EditToDo';

export default class Overview extends Component {
  render() {
    const { tasks, deleteToDo, onChange } = this.props;

    return (
      <>
        <List>
          {tasks.map((task) => {
            return (
              <EditToDo
                key={task.id}
                task={task}
                tasks={tasks}
                name={task.name}
                deleteToDo={deleteToDo}
                onChange={onChange}
              />
            );
          })}
        </List>
      </>
    );
  }
}
