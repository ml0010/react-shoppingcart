import './login-form.css'
import { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../../contexts/authentication-context';
import { SirenIcon, UserListIcon } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import { LoadingIcon } from '../buttons/loading-icon';
import { PopupContext } from '../../contexts/popup-context';

export const LoginForm = () => {

    const { login, navigate, loginFailed, setLoginFailed } = useContext(AuthenticationContext);
    const { showPopupMessage } = useContext(PopupContext);
    
    const [ input, setInput ] = useState({username: "", password: ""});
    const [ message, setMessage ] = useState("");
    const [ isSubmit, setIsSubmit ] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setLoginFailed(false);
        setMessage("");
    }, [location]);
        
    useEffect(()=>{
        if(loginFailed) {
            showPopupMessage(`Incorrect login detail`, 'nagative');
            setMessage('INCORRECT LOGIN INFORMATION');
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
            showPopupMessage(`Please fill in the form`, 'nagative');
            setMessage('PLEASE FILL IN THE FORM');
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setLoginFailed(false);
        if(isInputValid()) {
            setMessage("PROCESSING LOGIN...");
            await login(input, location.pathname);
            resetInput();
        }
        setIsSubmit(false);
    }
    
    return (
        <div className='login-form'>
            {isSubmit && <LoadingIcon />}
            <form id='form' onSubmit={handleSubmit}>
                <input className='input' name='username' type='text' placeholder='Username' value={input.username} onChange={handleInput}></input>
                <input className='input' name='password' type='password' placeholder='Password' value={input.password} onChange={handleInput}></input>
                {message && <p className='errorMsg'><SirenIcon size={15} />{message}</p>}
            </form>
            <div className='buttons'>
                <button className='button highlight' type='submit' form='form'>SUBMIT</button>
                <button className='button' onClick={() => navigate('/join')}>JOIN<UserListIcon size={13} /></button>
            </div>
        </div>
    )
}

export default LoginForm;