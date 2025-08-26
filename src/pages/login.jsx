import '../styles/login.css';
import LoginForm from '../components/login/login-form';
import { GobackButton } from '../components/buttons/goback-button';
import { SignInIcon } from '@phosphor-icons/react';

export const Login = () => {

    return (
        <div className='login'>
            <GobackButton />
            <div className='form'>
                <div className='loginTitle'>
                    <SignInIcon size={35} weight='bold'/>
                    <h2>LOGIN</h2>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;