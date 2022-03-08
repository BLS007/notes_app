// Importing react using hooks.
// useState: allows you to have state variables in functional components.
import React, {useState} from 'react';
// Importing the NoteForm.js component.
import NoteForm from './NoteForm';
// Importing the react icons using "npm install react-icons --save" in bash. These icons will either remove the entry or edit the entry. 
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

// Allows you to edit notes that have been created. 
function Note({ notes, completeNote, removeNote, updateNote }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateNote(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <NoteForm edit={edit} onSubmit={submitUpdate} />;
    }

    return notes.map((note, index) => (
        // Function to verify if the note is completed or not. 
        <div className={note.isComplete ? 'note-row complete' : 'note-row'} key={index}>

            <div key={note.id} onClick={() => completeNote(note.id)}>
                {note.text}
            </div>
            {/* Importing the react icons. */}
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeNote(note.id)}
                className='delete-icon'
                />
                <TiEdit
                onClick={() => setEdit({ id: note.id, value: note.text})}
                className='edit-icon'
                />
            </div>

        </div>
    ));
}

export default Note;