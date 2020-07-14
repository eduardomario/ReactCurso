import React from 'react';
import './Task.Detail.css';

class TaskDetail extends React.Component {
    render = () => {
        return <div key={this.props.task.id.toString()} className={openModal(this.props.isOpen)}>
            <div className="card-detial-info">
                <h2 className="task-title">Task Information</h2>
                <h3 className="task-subtitle">{this.props.task.title}</h3>
                <p className="task-text">{this.props.task.description}</p>
                <p className="task-text">{this.props.task.state}</p>
                <button onClick={this.props.openModal}>Close</button>
            </div>
        </div>
    }
  }

  function openModal(isOpen) {
      return isOpen ? 'card-detail-open' : 'card-detail-close'
  }
  
  export default TaskDetail;