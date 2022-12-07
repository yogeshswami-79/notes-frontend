import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../../styles/btnaddnote.scss'

function BtnAddNote({onClick}) {
    return (
        <div id='btn-add-note-container' onClick={()=>onClick()}>
            <AddIcon className='btn-add-note' />
        </div>
    );
}

export default BtnAddNote;