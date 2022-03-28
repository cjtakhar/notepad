import React from 'react';
import '../App.css';

const greetings = "Hello World";

export default function Notepad() {
    return (
        <div>
            <div className="title">
                <h1 contentEditable="true">{greetings}</h1>
            </div>
            <div className="notepad">
                <p contentEditable="true">write something.</p>
            </div>
        </div>
    )
}