import React from 'react';
import './NewTask.css';

class NewTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                title: 'Task 1', description: 'Description', state: 'To Do'
            }
        }
    }

    inputHandle = event => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            item: {
                ...this.state.item, [name]:value
            }
        })
    }

    save = () => {
        this.props.saveNewTask(this.state.item);
    }

    render = () => {
        const item = this.state.item
        return <div className={openModal(this.props.isOpen)}>
            <div className="card-detial-info">
                <h2 className="task-title">New Task</h2>
                <p className='task-subtitle'>Title: </p>
                <input name='title' type='text' onChange={this.inputHandle} value={item.title}></input>
                <p className='task-subtitle'>Description: </p>
                <input name='description' type='text' onChange={this.inputHandle} value={item.description}></input>
                <p className='task-subtitle'>State: </p>
                <div className='task-state'>
                    <div className='task-radio-state'>
                        <p className='task-subtitle'>To Do</p>
                        <input
                            name='state' type='radio' onChange={this.inputHandle}
                            value={'To Do'} checked={item.state === 'To Do'}
                        ></input>
                    </div>
                    <div className='task-radio-state'>
                        <p className='task-subtitle'>In Progress</p>
                        <input
                            name='state' type='radio' onChange={this.inputHandle}
                            value={'In Progress'} checked={item.state === 'In Progress'}
                        ></input>
                    </div>
                    <div className='task-radio-state'>
                        <p className='task-subtitle'>Testing</p>
                        <input
                            name='state' type='radio' onChange={this.inputHandle}
                            value={'Testing'} checked={item.state === 'Testing'}
                        ></input>
                    </div>
                    <div className='task-radio-state'>
                        <p className='task-subtitle'>Done</p>
                        <input
                            name='state' type='radio' onChange={this.inputHandle}
                            value={'Done'} checked={item.state === 'Done'}
                        ></input>
                    </div>
                </div>

                <button onClick={this.save}>Save</button>
                <button onClick={this.props.openModal}>Close</button>
            </div>
        </div>
    }
}

function openModal(isOpen) {
    return isOpen ? 'card-detail-open' : 'card-detail-close'
}

export default NewTask;