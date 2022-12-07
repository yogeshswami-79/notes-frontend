import React from 'react';
import '../../styles/titleicon.scss';

function TitleIcon({title}) {
    return (
        <div id='icon-title-container'>
            <h5 className='icon-title'>{title}</h5>
        </div>
    );
}

export default TitleIcon;