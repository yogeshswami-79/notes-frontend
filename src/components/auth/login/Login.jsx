import React, { useState } from 'react';
import '../../../styles/login.scss'
import { login , getUser} from '../../../utils/db'
import { useDispatch } from 'react-redux';
import { setUser } from '../../../state/slices/userSlice';

function Login() {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();

    function handelUsername(value){
        setUname(()=>value);
    }
    function handlePassword(value){
        setPass(()=>value);
    }

    function filter(str){
        return str.replace(/[^a-zA-Z0-9_ ]/g, "").trimEnd().trimStart();
    }

    async function loginUser(){
        const usrname = filter(uname);
        if((!usrname && usrname === "") && (!pass && pass==="")) return;

        login(usrname, pass)
        .then(res => {
            window.location.reload(false);
        })
        .catch( error=> console.log(error.response.data.message) )
    }

    return (
        <div id='login-container'>
            
            <div className="heading">
                <h5>Login</h5>
            </div>
            
            <div className="form-container">
                <input type="text" name="username" id="username" placeholder='enter username' maxLength='50' onChange={e=>handelUsername(e.target.value)}/>
                <input type="password" name="password" id="password" placeholder='password' maxLength='30' onChange={e=>handlePassword(e.target.value)}/>
            </div>
            
            <div className="actions">
                <a onClick={loginUser}>Login</a>
            </div>

        </div>
    );
}

export default Login;