import '../styles/login.css';
import LoginForm from '../components/login/login-form';
import { SignInIcon } from '@phosphor-icons/react';

export const Login = () => {

    return (
        <div className='login'>
            <div className='form'>
                <div className='loginTitle'>
                    <SignInIcon size={35} weight='bold'/>
                    <h2>SIGN IN</h2>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;