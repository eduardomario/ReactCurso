import React from 'react';
import { Link } from 'react-router-dom';

let style = {
    top: 0,
    position: 'fixed',
    height: '100%',
    background: 'blue',
}

const Navbar = (props) => {
    return <div style={style}>
        <h1>Navbar</h1>
        <button onClick={props.hide}>Close</button>
        <li><Link to='/'>Home</Link></li>
        <li><a href='/Page1'>Page 1</a></li>
        <li><Link to='/Page2'>Page 2</Link></li>
        <li><Link to='/Page3'>Page 3</Link></li>
        <li><a href='/Page4'>Page 4</a></li>
    </div>
}

export default Navbar