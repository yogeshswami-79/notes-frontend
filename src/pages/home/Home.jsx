import React, { useState, useEffect, useMemo } from 'react';
import BtnAddNote from '../../components/addNoteBtn/BtnAddNote';
import Notes from '../../components/notes/Notes';
import CreateNote from '../../components/NewNote/CreateNote';
import Chips from '../../components/chips/Chips';
import { getNotes } from '../../utils/db'
import '../../styles/home.scss';

function Home({ notes, setNotes, tags }) {
    const [visible, setVisiblity] = useState(false);
    const [size, setSize] = useState(0);
    const [skip, setSkip] = useState(0);



    function fetchNotes(skip) {
        getNotes(skip)
            .then(res => {
                const data = res.data[0];
                setSize(() => res.data[1]);
                setNotes((prev) => [...data])
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        fetchNotes(skip);
    }, [skip])


    function next() {
        setSkip(skp => skp + 9);
    }

    function prev() {
        setSkip(skp => skp - 9);
    }

    function showNoteDialog() {
        setVisiblity(() => true);
    }

    function hideNoteDialog() {
        setVisiblity(() => false);
    }

    function saveNote() {
        hideNoteDialog()
    }



    return (
        <div id="home">
            <Chips setNotes={setNotes} tags={tags} />
            
            <Notes notes={notes} size={size} setNotes={setNotes} />
            
            <div className="btns-wrapper">
                <div className="load-more-btn">
                    {
                        (size > 10) ? 
                            ((skip > 0 && skip < size ) ? 
                                (<><h6 href="" className='btn-load-more' onClick={() => prev()}> {'< prev '} </h6> <h6 href="" className='btn-load-more' onClick={() => next()}> {' next >'} </h6> </>)
                            :
                              (skip<size) ? (<h6 href="" className='btn-load-more' onClick={() => next()}> {' next >'} </h6>) : <h6 href="" className='btn-load-more' onClick={() => prev()}> {'< prev '} </h6>) 
                                    :
                            null
                    }
                </div>
            </div>

            <BtnAddNote onClick={showNoteDialog} />
            
            {visible && <CreateNote onSave={() => saveNote()} onCancel={hideNoteDialog} />}
        </div>
    );
}

export default Home;