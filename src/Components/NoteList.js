// Importing react using hooks.
// useState: allows you to have state variables in functional components.
import React, {useState} from 'react';
// Importing the Note.js & NoteForm.js components.
import Note from './Note';
import NoteForm from './NoteForm';

function NoteList() {
    const [notes, setNotes] = useState([]);
  
    // Allows you to ensure that the characters being typed out even if they are spaced out will be included in the list/entry.
    const addNote = note => {
        if (!note.text || /^\s*$/.test(note.text)) {
            return;
        }

        const newNotes = [note, ...notes];

        setNotes(newNotes);
    };

    // This function allows you to update the entry after you submit it.
    const updateNote = (noteId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        
        setNotes(prev => prev.map(item => (item.id === noteId ? newValue : item)));

    };

    // This function allows you to remove the entry after you submit it.
    const removeNote = id => {
        const removeArr = [...notes].filter(note => note.id !== id);

        setNotes(removeArr);
    };

    // Prints out the list of entries below after clicking the "Add Note" button.
    const completeNote = id => {
        let updatedNotes = notes.map(note => {
            if (note.id === id) {
                note.isComplete = !note.isComplete;
            }
            return note;
        });
        setNotes(updatedNotes);
    };

    return (
    <div>
        <h1>Notes App</h1>
        <p>Please feel free to add as many notes as you would like.</p>
        <p>You can add, edit, delete, and also click on a note to mark it as completed.</p>
        <NoteForm onSubmit={addNote} />
        <Note notes={notes} completeNote={completeNote} removeNote={removeNote} updateNote={updateNote} />
    </div>
  );
}

export default NoteList;