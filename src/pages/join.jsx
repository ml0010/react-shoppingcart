import '../styles/join.css';
import { useContext, useState } from 'react'
import { AuthenticationContext } from '../contexts/authentication-context';
import { UserListIcon } from '@phosphor-icons/react';
import { GobackButton } from '../components/buttons/goback-button';
import { MotionRoute } from '../components/motions';

export const Join = () => {
    
    const { navigate, addNewUser, checkUniqueUsername, checkUniqueEmail } = useContext(AuthenticationContext);
    const [ message, setMessage ] = useState("");
    
    const [ input, setInput ] = useState({
        name: "",
        email: "",
        telephone: "",
        username: "",
        password: "",
        passwordRepeat: ""
    });

    const isInputValid = () => {
        if(input.name !== "" &&
            input.email !== "" &&
            input.telephone !== "" &&
            input.username !== "" &&
            input.password !== "" &&
            input.passwordRepeat !== ""
        ) {
            if(input.password === input.passwordRepeat) {
                return true;
            } else {
                setMessage('Your password does not match');
                return false;
            }
        } else {
            setMessage('Please fill the form');
            return false;
        }
    };

    const isValueUnique = async () => {
        const isEmailUnique = await checkUniqueEmail(input);
        const isUsernameUnique = await checkUniqueUsername(input);
        if (!isEmailUnique) {
            setMessage('There is an account using this email');
            return false;
        } else if (!isUsernameUnique) {
            setMessage('Username is already used by someone');
            return false;
        } 
        return true;
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({...prev, [name]: value}));
    };

    const resetInput = () => {
        setInput((prev) => ({...prev, name: "", email: "", telephone: "", username: "", password: "", passwordRepeat: ""}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isInputValid() && await isValueUnique()) {
            addNewUser(input);
            resetInput();
            navigate(-1);
        }
    };

    return (
        <MotionRoute>
            <div className='join'>
                <GobackButton />
                <div className='form'>
                    <div className='joinTitle'>
                        <UserListIcon size={35} weight='bold' />
                        <h2>JOIN</h2>
                    </div>
                    <form className='join-form' id='join-form' onSubmit={handleSubmit}>
                        <input type='text' name='name' placeholder='Name' value={input.name} onChange={handleInput}></input>
                        <input type='email' name='email' placeholder='Email' value={input.email} onChange={handleInput}></input>
                        <input type='text' name='telephone' placeholder='Telephone' value={input.telephone} onChange={handleInput}></input>
                        <input type='text' name='username' placeholder='User Name' value={input.username} onChange={handleInput}></input>
                        <input type='password' name='password' placeholder='Password' minLength='4' value={input.password} onChange={handleInput}></input>
                        <input type='password' name='passwordRepeat' placeholder='Repeat Password' minLength='4' value={input.passwordRepeat} onChange={handleInput}></input>
                    </form>
                    <p className='errorMsg'>{message}</p>
                    <button className='button' type='submit' form='join-form'>SUBMIT</button>
                    <button className='button' onClick={()=>navigate(-1)}>GO BACK</button>
                </div>
            </div>
        </MotionRoute>
    )
}
export default Join;