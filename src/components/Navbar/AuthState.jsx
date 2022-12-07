import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import '../../styles/auth.scss';
import { Logout, getUser } from '../../utils/db';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logout } from '../../state/slices/userSlice';
import { useEffect } from 'react';


function AuthState({ loginTabVis, setLoginTabVis }) {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    function handleLogout() {
        Logout()
            .then(res => dispatch(logout()))
            .catch(err => console.log(err))
    }

    return (
        <div id='auth'>
            {user.uname ? <h5 className='auth-msg'>{user.uname}</h5> : null}
            {user.uname ? <LogoutIcon className='icon-logout' onClick={() => { handleLogout() }} /> : (loginTabVis ? <h5 className='btn-signup' onClick={() => setLoginTabVis(() => false)} >register</h5> : <h5 className='btn-signin' onClick={() => setLoginTabVis(() => true)} >login</h5>)}
        </div>
    );
}

export default AuthState;