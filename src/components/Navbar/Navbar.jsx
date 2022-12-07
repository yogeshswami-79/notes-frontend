import React from 'react';
import Search from './Search';
import TitleIcon from './TitleIcon';
import AuthState from './AuthState';
import '../../styles/navbar.scss'
import {search} from '../../utils/db';

function ActionBar({setNotes, loginTabVis, setLoginTabVis}) {
    const appName = "Notes";

    function onSearch(query){
        search(query).then(res=>{
            setNotes(()=>res.data[0]);
        })
        .catch(err=> console.log(err));
    }
    
    return (
        <div id="navbar">
            <TitleIcon title={appName}/>
            <Search onSearch={onSearch}/>
            <AuthState loginTabVis={loginTabVis} setLoginTabVis={setLoginTabVis}/>
        </div>
    );
}

export default ActionBar;