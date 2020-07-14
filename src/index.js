import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Action from './components/Action/Action';
import Reference from './components/Reference/Reference';
import NewTask from './components/Task/NewTask/NewTask';
import Hooks from './components/Hooks/Hook';
import Jira from './components/Jira/Jira';
import Router from './App';

function Hello(props) {
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  return <Hello toWhat="World"/>;
}

function formatName(user) {
  return `${user.firstName} ${user.lastName}`
}

const Message = props => {
  const styles = {
    color: props.color,
    fontSize: props.size
  }
return <h2 style={styles}>{props.content}</h2>
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>
}

function Blogs(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  )
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  )
  return <div>
    {sidebar}
    <hr/>
    {content}
  </div>
}

class Root extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    }
    // El State puede ir de esta manera (bind + funtion)
    //this.changeLoading = this.changeLoading.bind(this)
  }

  // El State puede ir de esta manera (bind + funtion)
  /*changeLoading() {
    const { loading } = this.state
    this.setState({ loading: !loading })
  }*/

  // El State puede ir de esta otra manera (function only)
  changeLoading = () => {
    const { loading } = this.state
    this.setState({ loading: !loading })
  }

  render = () => {
    const { loading } = this.state;
    let content;
    if (loading) content = 'Cargando ...'
    else content = 'No esta Cargando'
    return <div style={{textAlign: 'center'}}>
      <Message size='30px' color='red' content='Ahora'/>
      <Message size='30px' color='blue' content='Entiendo'/>
      <Message size='30px' color='gray' content='Los Props ;D'/>
      <button onClick={this.changeLoading} >Cambiar estado</button>
      <p>{content}</p>
    </div>
  }
}

class CreateNewTask extends Component {
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

const user = { firstName: 'Eduardo', lastName: 'Pacreu'};
const element = <h1>Hello, {formatName(user)}</h1>;
const numbers = [1, 2, 3, 4, 5]
const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  { id: 2, title: 'Installation', content: 'You can install React from npm.'}
]

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

ReactDOM.render(
  [<React.StrictMode>
    <Router />
  </React.StrictMode>],
  document.getElementById('root')
);

/*ReactDOM.render(
  [<React.StrictMode>
    <Hooks />
  </React.StrictMode>],
  document.getElementById('root')
);*/

/*ReactDOM.render(
  [<React.StrictMode>
    <HelloWorld />
    <Root />
    <NumberList numbers={numbers} />
    <Blogs posts={posts} />
  </React.StrictMode>,
  element],
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
