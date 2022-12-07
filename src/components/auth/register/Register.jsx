import React, { useState } from 'react';
import { register , login } from '../../../utils/db';
import '../../../styles/register.scss';

function Register() {
    const [name, setName] = useState("");
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function filterEmail(str){
        return str.replace(/[^a-zA-Z0-9_@ ]/g, "").trimEnd().trimStart();
    }
    function filterUname(str){
        return str.replace(/[^a-zA-Z0-9_ ]/g, "").trimEnd().trimStart();
    }

    function handleName(value){
        setName(()=> value );
    }
    function handleUsername(value){
        setUname(()=>filterUname(value));
    }
    function handleEmail(value){
        setEmail(()=>filterEmail(value));
    }
    function handlePassword(value){
        setPassword(()=>value);
    }


    async function registerUser(){
        if(! ((name && name.length >0 ) && ( uname && uname.length>0) && (email && email.length>0) && (password && password.length>7)) )    return;
        console.log('done')
        const user = {
            name,
            uname,
            email,
            password
        }

        register(user)
        .then(res=>{
            login(res.data.uname, password)
            .catch( error=> alert(error.response.data.message) )
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div id='register-container'>

            <div className="heading">
                <h5>Register</h5>
            </div>

            <div className="form-container">
                <input type="text" name="name" id="name" placeholder='enter name' maxLength='50' onChange={e => handleName(e.target.value)} />
                <input type="text" name="username" id="username" placeholder='enter username' maxLength='50' onChange={e => handleUsername(e.target.value)} />
                <input type="email" name="email" id="email" placeholder='enter email' maxLength='80' onChange={e => handleEmail(e.target.value)} />
                <input type="password" name="password" id="password" placeholder='password' maxLength='30' onChange={e => handlePassword(e.target.value)} />
            </div>

            <div className="actions">
                <a onClick={registerUser}>Register</a>
            </div>

        </div>
    );
}

export default Register;