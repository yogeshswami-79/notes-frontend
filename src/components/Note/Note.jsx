import React from 'react';
import constants from '../../utils/constants';
import { DeleteOutline } from '@mui/icons-material'
import { deleteNote } from '../../utils/db';
import '../../styles/note.scss';

function Note({ note, index, setNotes }) {

    const title = note.title;
    const content = note.description;
    const time = Date.parse(note.time);
    const clr = constants.getColor(index);


    function handleDelete() {
        const nid = note.nid;
        deleteNote(nid)
            .then(res => {
                setNotes((notes) => notes.filter(nte => nte.nid !== nid))
            })
            .catch(err => console.log(err))
    }

    const t = new Date(time).toISOString().split('T')[0];


    return (
        <div id="note" style={{ backgroundColor: clr }} >
            <div className="topline">
                <h5 className="title">{title}</h5>
                <DeleteOutline className="btn-delete" onClick={handleDelete} />
            </div>
            <p className="content">{content}</p>
            <div className="baseline">
                <p className="time">{t}</p>
                <p className="tag">{note.tag}</p>
            </div>
        </div >
    );
}

export default Note;