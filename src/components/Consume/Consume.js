import React, { useState } from 'react';
import './Consume.css';
import Axios from 'axios';

const ConsumePage = () => {
    const [joke, setJoke] = useState('');

    const consumeApi = () => {
        Axios.get('http://api.icndb.com/jokes/random').then(resp => {
            setJoke(resp.data.value.joke)
        })
    }

    return <div className='center-page'>
        <h2>Consume Api Service</h2>
        <button onClick={consumeApi}>Consume Api</button>
        <h5>Joke: {joke}</h5>
    </div>
}

export default ConsumePage