// Importing react using hooks.
// useState: allows you to have state variables in functional components.
// useEffect: allows you to tell react that the component needs to do something after render.
// useRef: allows you to accept one argument as the intial value and returns a reference. 
import React, { useState, useEffect, useRef } from 'react';

function NoteForm(props) {
    // Sets the current input value for the form so you dont have to re-type it. 
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    // Establishes the input reference value.
    const inputRef = useRef(null)

    // Allows you to focus on whatever you put as the reference (ref). In this case, when you refresh the page it will focus on the form to start typing your entry.
    useEffect(() => {
        inputRef.current.focus()
    })

    // Handles the way changes are being submitted.
    const handleChange = e => {
        setInput(e.target.value);
    };

    // Handles the way values are being submitted. 
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    // Returns all of the values generated after you submit your entry.
    return (
        <form className='note-form' onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input
                type='text'
                placeholder='Update your item'
                value={input}
                name='text'
                className='note-input edit'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='note-button edit'>Update</button>
            </>
            ) : ( 
            <>
            <input
                type='text'
                placeholder='Please enter your note here....'
                value={input}
                name='text'
                className='note-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='note-button'>Add</button>
            </>
            )}
        </form>
    );
}

export default NoteForm;