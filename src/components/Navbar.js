import React from 'react';
import { Link } from 'react-router-dom';

let style = {
    top: 0,
    position: 'fixed',
    height: '100%',
    width: '20vw',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    background: 'rgb(41, 41, 226)'
}

let background = {
    background: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
    position: 'absolute'
}

let linkList = {
    'align-self': 'baseline',
    'margin-left': '3vw',
    'margin-top': '2vh'
}

let link = {
    color: 'black',
    'text-decoration': 'none'
}

const Navbar = (props) => {
    return <div style={background}>
        <div style={style}>
            <h1>Navbar</h1>
            <button onClick={props.hide}>Close</button>
            <li style={linkList}><Link to='/' style={link} onClick={props.hide}>Home</Link></li>
            <li style={linkList}><Link to='/Consume' style={link} onClick={props.hide}>Consume</Link></li>
            <li style={linkList}><Link to='/Reference' style={link} onClick={props.hide}>Reference</Link></li>
            <li style={linkList}><Link to='/Hook' style={link} onClick={props.hide}>Hook</Link></li>
            <li style={linkList}><Link to='/Page4' style={link} onClick={props.hide}>Page 4</Link></li>
        </div>
    </div>
}

export default Navbar