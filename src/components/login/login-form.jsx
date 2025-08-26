import './login-form.css'
import { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../../contexts/authentication-context';
import { UserListIcon } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';

export const LoginForm = () => {

    const { login, navigate, loginFailed, setLoginFailed } = useContext(AuthenticationContext);
    
    const [ input, setInput ] = useState({username: "", password: ""});
    const [ message, setMessage ] = useState("");

    const location = useLocation();

    useEffect(() => {
        setLoginFailed(false);
        setMessage("");
    }, [location]);
        
    useEffect(()=>{
        if(loginFailed) {
            setMessage('YOUR LOGIN INFORMATION IS NOT CORRECT');
        }
    },[loginFailed]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({...prev, [name]: value}));
    };

    const resetInput = () => {
        setInput((prev) => ({...prev, username: "", password: ""}));
    }

    const isInputValid = () => {
        if(input.username !== "" && input.password !== "" ) {
            return true;
        } else {
            setMessage('PLEASE FILL IN THE FORM');
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginFailed(false);
        if(isInputValid()) {
            setMessage("PROCESSING LOGIN...");
            login(input, location.pathname);
            resetInput();
        }
    }
    
    return (
        <div className='login-form'>
            <form id='form' onSubmit={handleSubmit}>
                <input name='username' type='text' placeholder='Username' value={input.username} onChange={handleInput}></input>
                <input name='password' type='password' placeholder='Password' value={input.password} onChange={handleInput}></input>
                <p className='errorMsg'>{message}</p>
            </form>                
            <button type='submit' form='form'>SUBMIT</button>
            <button onClick={()=>navigate('/join')}>JOIN<UserListIcon size={18} /></button>
        </div>
    )
}

export default LoginForm;