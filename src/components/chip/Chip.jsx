import React from 'react';
import '../../styles/chip.scss';
import {search} from '../../utils/db';

function Chip({tag,setNotes}) {
    
    async function searchByTag(tag){
        search(tag)
        .then(res=>{
            setNotes(()=>res.data[0])
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='chip' onClick={()=>searchByTag(tag)} >
            <h5>{tag}</h5>        
        </div>
    );
}

export default Chip;