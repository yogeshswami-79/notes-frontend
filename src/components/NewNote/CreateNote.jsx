import React, { useState } from 'react';
import { insertNote } from '../../utils/db';
import '../../styles/createNote.scss';

function CreateNote({onSave, onCancel}) {
    
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [desc, setDesc] = useState("");

    function filterTag(value){
        return value.trimStart().trimEnd().replace(/[^a-zA-Z0-9 ]/g, "").split(' ')[0].trim();
    }

    function handleOnSave(){

        if(title && title.length >0){
            const note = {
                tag,
                title,
                description:desc
            };
            insertNote(note)
            .then(res=> {
                
            })
            .catch(err=>{
                console.log(err)
            })
        }


        onSave(title, desc, tag , (err)=>{
            if(err) return;
            setTitle(()=>"");
            setDesc(()=>"")
            setTag(()=>"")
            onSave();
        })
    }

    return (
        <div id='new-note-container'>
            
            <div className="heading">
                <h5>Create New Note</h5>
            </div>

            <div className="input-containers">
                <input type="text" className='input-title' placeholder='Enter title for note' onChange= {e => setTitle(()=>e.target.value)}/>
                <input type="text" className='input-tag' placeholder='tag' onChange={e=>setTag(()=> filterTag(e.target.value))} />
                <textarea type="text" className='input-content' placeholder='Enter note content description.... ' onChange={e => setDesc(()=>e.target.value)}/>
            </div>

            <div className="actions">
                <a onClick={()=>onCancel()}>discard</a>
                <a onClick={handleOnSave}>save</a>
            </div>
        </div>
    );
}

export default CreateNote;