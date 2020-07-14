import React, { Component } from 'react';
import Action from '../Action/Action';
import NewTask from '../Task/NewTask/NewTask';

class Jira extends Component {
    constructor(){
        super();
        this.state = {
        isModalOpen: false,
        actions: actions
    };
}

setTaskState(state) {
    switch(state) {
        case 'To Do':
            return 0;
        case 'In Progress':
            return 1;
            case 'Testing':
            return 2;
        case 'Done':
            return 3;
        default:
            return 0;
    }
}

saveNewTask = item => {
    let actionId = this.setTaskState(item.state)
    let id = this.state.actions[actionId].tasks.length;
    let newTask = {
        id,
        ...item
    }
    let newTaskList = [
        ...this.state.actions[actionId].tasks, newTask
    ]
    let newAction = {
        id: this.state.actions[actionId].id,
        title: this.state.actions[actionId].title,
        tasks: newTaskList
    }
    let newActions = this.state.actions.map((item, index) => {
        if (index === actionId)
            return newAction
        else
            return item
    })
    this.setState({
        actions:newActions
    })
    this.openModal();
  }
  
openModal = () =>{
    const isModalOpen = this.state.isModalOpen;
    this.setState({ isModalOpen: !isModalOpen });
}
  
    render = () => {
        return <div style={{textAlign: 'center'}}>
            <button onClick={this.openModal} >Create New Task</button>
            <NewTask isOpen={this.state.isModalOpen} openModal={this.openModal} saveNewTask={this.saveNewTask}></NewTask>
            <RenderAcions actions={this.state.actions} />
        </div>
    }
}
  
function RenderAcions(props) {
    const styles = {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-around'
    }
    const listItems = props.actions.map((action) =>
      <Action key={action.id.toString()} action={action}></Action>
    );
    return <div style={styles}>{listItems}</div>
}
  
let actions = [
    { 
      id: 1, title: 'To Do', tasks: [
          { id: 1, title: 'Task 1', description: 'Description', state: 'To Do' },
          { id: 2, title: 'Task 2', description: 'Description', state: 'To Do' }
      ]
    },
    { 
      id: 2, title: 'In Progress', tasks: [
          { id: 1, title: 'Task 1', description: 'Description', state: 'In Progress' },
          { id: 2, title: 'Task 2', description: 'Description', state: 'In Progress' }
      ]
    },
    { 
      id: 3, title: 'Testing', tasks: [
          { id: 1, title: 'Task 1', description: 'Description', state: 'Testing' },
          { id: 2, title: 'Task 2', description: 'Description', state: 'Testing' }
      ]
    },
    { 
      id: 4, title: 'Done', tasks: [
          { id: 1, title: 'Task 1', description: 'Description', state: 'Done' },
          { id: 2, title: 'Task 2', description: 'Description', state: 'Done' }
      ]
    },
]


export default Jira
