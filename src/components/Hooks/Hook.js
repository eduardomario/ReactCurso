import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [clicks, setClicks] = useState(0);
    const [emoji, setEmoji] = useState('😀');

    const addClicks = () => {
        setClicks(clicks + 1)
    }

    const toggleEmoji = () => {
        const nextEmoji = emoji === '😀' ? '😁' : '😀'
        setEmoji(nextEmoji)
    }

    return (
        <div>
            <h1>HooksUseState</h1>
            <button onClick={addClicks}>Click({clicks})</button>
            <button onClick={toggleEmoji}>Alternate Emoji</button>
            <h2>{emoji}</h2>
        </div>
    );
}

/*const Hooks = () => {

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const handleMove = (m) => {
        setMouseX(m.clientX)
        setMouseY(m.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove)
    })

    return (
        <div>
            <h1>HooksUseEffect</h1>
            <h2>
                X: {mouseX} Y: {mouseY}
            </h2>
        </div>
    );
}*/

export default Hooks