import React from 'react';
import './Action.css';
import Task from '../Task/Task';

class Action extends React.Component {
    
    render = () => {
      return <div key={this.props.action.id} className="jira-table">
            <div className="title">
                {this.props.action.title}
            </div>
            
            <div className="task">
                {getTasks(this.props.action.tasks)}
            </div>
      </div>
    }
}

function getTasks(tasks) {
    const listItems = tasks.map((task) =>
        <Task task={task}></Task>
    );
    return <div className="list-task">{listItems}</div>;
}

export default Action;