import React from 'react';
import './Reference.css';

class Reference extends React.Component {
    constructor() {
        super();
        this.searchInput = React.createRef()
    }

    focus = () => {
        this.searchInput.current.focus()
    }

    blur = () => {
        this.searchInput.current.blur()
    }

    render = () => {
        return <div>
            <input type='text' ref={this.searchInput}></input>
            <button onClick={this.focus}>Focus</button>
            <button onClick={this.blur}>Blur</button>
        </div>
    }
}

export default Reference;