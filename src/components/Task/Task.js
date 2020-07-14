import React from 'react';
import './Task.css';
import TaskDetail from './Detail/Task.Detail';

class Task extends React.Component {
  constructor(){
    super();
    this.state = { isModalOpen: false };
  }

  openModal = () =>{
    const isModalOpen = this.state.isModalOpen;
    this.setState({ isModalOpen: !isModalOpen });
  }

  render = () => {
    return <div key={this.props.task.id.toString()} className="card" onClick={this.openModal}>
      <h3>{this.props.task.title}</h3>
      <p>{this.props.task.description}</p>
      <TaskDetail isOpen={this.state.isModalOpen} task={this.props.task} openModal={this.openModal}></TaskDetail>
    </div>
  }
}

export default Task;