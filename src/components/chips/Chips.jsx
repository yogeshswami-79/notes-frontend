import React ,{ useState , useEffect } from 'react';
import Chip from '../chip/Chip';
import '../../styles/chips.scss';
import { getTopTags  } from '../../utils/db';

function Chips( { setNotes , tags} ) {

    // const [tags, setTags] = useState([])
    

    return (
        <div id="chips">
            {tags.map((tagName, i) =>  <Chip tag={tagName} key={i} setNotes={setNotes}/>)}
        </div>
    );

}

export default Chips;