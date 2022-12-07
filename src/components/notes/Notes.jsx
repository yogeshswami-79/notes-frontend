import React from 'react';
import Note from '../Note/Note';
import '../../styles/notes.scss';


function Notes({notes, size , setNotes }) {

    return (
        <div id='notes' className='notes'>
            {notes.map((note, i) => {
                return <Note index={i} key={i} note={note} setNotes={setNotes} />
            })}
        </div>
    );
}

export default Notes;