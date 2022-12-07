import React from 'react';
import Login from '../../components/auth/login/Login';
import Register from '../../components/auth/register/Register';
import '../../styles/welcome.scss';

function Welcome({login, loginTabVis}) {
    return (
        <div id='welcome'>
            <div className="left"></div>
            <div className="right">
                {loginTabVis ? <Login /> : <Register />}
            </div>
        </div>
    );
}

export default Welcome;