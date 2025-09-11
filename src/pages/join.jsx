import '../styles/join.css';
import { useContext, useState } from 'react'
import { AuthenticationContext } from '../contexts/authentication-context';
import { SirenIcon, UserListIcon } from '@phosphor-icons/react';
import { GobackButton } from '../components/buttons/goback-button';
import { MotionRoute } from '../components/motions';
import { LoadingIcon } from '../components/buttons/loading-icon';

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
    const [ isSubmit, setIsSubmit ] = useState(false);

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
                setMessage('PASSWORD - NO MATCH');
                return false;
            }
        } else {
            setMessage('PLEASE FILL INT THE FORM');
            return false;
        }
    };

    const isValueUnique = async () => {
        const isEmailUnique = await checkUniqueEmail(input);
        const isUsernameUnique = await checkUniqueUsername(input);
        if (!isEmailUnique) {
            setMessage('EXISTING EMAIL');
            return false;
        } else if (!isUsernameUnique) {
            setMessage('EXISTING USERNAME');
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
        setIsSubmit(true);
        if(isInputValid() && await isValueUnique()) {
            await addNewUser(input);
            await resetInput();
            navigate(-1);
        }
        setIsSubmit(false);
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
                        <input className='input' type='text' name='name' placeholder='Name' value={input.name} onChange={handleInput}></input>
                        <input className='input' type='email' name='email' placeholder='Email' value={input.email} onChange={handleInput}></input>
                        <input className='input' type='text' name='telephone' placeholder='Telephone' value={input.telephone} onChange={handleInput}></input>
                        <input className='input' type='text' name='username' placeholder='User Name' value={input.username} onChange={handleInput}></input>
                        <input className='input' type='password' name='password' placeholder='Password' minLength='4' value={input.password} onChange={handleInput}></input>
                        <input className='input' type='password' name='passwordRepeat' placeholder='Repeat Password' minLength='4' value={input.passwordRepeat} onChange={handleInput}></input>
                        {isSubmit && <LoadingIcon />}
                    </form>

                    {message && <p className='errorMsg'><SirenIcon size={15} />{message}</p>}
                    <button className='button highlight' type='submit' form='join-form'>SUBMIT</button>
                    <button className='button' onClick={()=>navigate(-1)}>GO BACK</button>
                </div>
            </div>
        </MotionRoute>
    )
}
export default Join;