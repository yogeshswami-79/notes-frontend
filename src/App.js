import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Home from './pages/home/Home';
import Welcome from './pages/welcome/Welcome';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './state/slices/userSlice';
import { getUser , getTopTags } from './utils/db';
import './App.css';

function App() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [loginTabVis, setLoginTabVis] = useState(true);

  useEffect(() => {
    getUser()
      .then(res => {
        const uid = res.data.uid;
        const uname = res.data.uname;
        dispatch(setUser({ uid, uname }))
      })
      .catch(err => console.log(err));

  }, [])

  useEffect(() => {
    getTopTags()
      .then(tgs => {
        setTags(() => tgs.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <div className="App">
      <Navbar setNotes={setNotes} loginTabVis={loginTabVis} setLoginTabVis={setLoginTabVis} />
      {user.uid ? <Home notes={notes} setNotes={setNotes} tags={tags} /> : <Welcome loginTabVis={loginTabVis} />}
    </div>
  );
}

export default App;
