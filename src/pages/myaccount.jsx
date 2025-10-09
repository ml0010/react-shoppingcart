import { useContext, useEffect, useState } from 'react'
import '../styles/myaccount.css';
import { AuthenticationContext } from '../contexts/authentication-context';
import { GobackButton } from '../components/buttons/goback-button';
import { ProhibitIcon, SignOutIcon } from '@phosphor-icons/react';
import { PopupContext } from '../contexts/popup-context';
import { LoadingIcon } from '../components/buttons/loading-icon';

export const MyAccount = () => {
    const { user, logout, navigate, editEmail, editPhone, editPassword, checkPassword } = useContext(AuthenticationContext);
    const { showPopupMessage } = useContext(PopupContext);

    const [ newEmail, setNewEmail ] = useState(user.email);
    const [ newPhone, setNewPhone ] = useState(user.telephone);
    const [ currentPassword, setCurrentPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ newPasswordRepeat, setNewPasswordRepeat ] = useState('');

    const [ isEditEmail, setIsEditEmail ] = useState(false);
    const [ isEditPhone, setIsEditPhone ] = useState(false);
    const [ isEditPassword, setIsEditPassword ] = useState(false);

    const [ message, setMessage ] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
    }, [isLoading]);

    const handleEditEmail = async () => {
        setIsEditPhone(false);
        setIsEditPassword(false);
        setMessage("");
        if(isEditEmail) {
            await editEmail(user.username, newEmail);
            setIsLoading(true);
            //setMessage('YOUR EMAIL ADDRESS IS UPDATED');
            showPopupMessage('Email address updated', 'positive');
        }
        setIsEditEmail(!isEditEmail);
    };
    const handleEditPhone = async () => {
        setIsEditEmail(false);
        setIsEditPassword(false);
        setMessage("");
        if(isEditPhone) {
            await editPhone(user.username, newPhone);
            setIsLoading(true);
            //setMessage('YOUR TELEPHONE IS UPDATED');
            showPopupMessage('Telephone updated', 'positive');

        }
        setIsEditPhone(!isEditPhone);
    };
    const handleEditPassword = async () => {
        setIsEditPhone(false);
        setIsEditEmail(false);
        setMessage("");
        if(isEditPassword) {
            if (!(newPassword.length > 3 && newPasswordRepeat.length > 3 )) {
                showPopupMessage('Password - 4 letters or more', 'negative');
                //setMessage("PASSWORD MINIMUM 4 LETTERS");
                return;
            } else if (!await checkPassword(user.username, currentPassword)) {
                showPopupMessage('Incorrect current password', 'negative');
                //setMessage("YOUR CURRENT PASSWORD IS NOT CORRECT");
                return;
            } else if (newPassword !== newPasswordRepeat) {
                showPopupMessage('New passwords do not match', 'negative');
                //setMessage("YOUR NEW PASSWORDS DO NOT MATCH");
                return;
            }
            await editPassword(user.username, newPassword);
            setIsLoading(true);
            //setMessage('YOUR PASSWORD IS UPDATED');
            showPopupMessage('Password updated', 'positive');

            setCurrentPassword('');
            setNewPassword('');
            setNewPasswordRepeat('');
        }
        setIsEditPassword(!isEditPassword);
    };

    return (
        <div className='myaccount'>
            <GobackButton />
            <div className='information-wrapper'>
                <h1>MY ACCOUNT</h1>
                    <div className='information'>
                    {isLoading && <LoadingIcon />}
                    <div className='account-info'>
                        <h3 className='categoty-title'>Username</h3>
                        <div className='content'>
                            <p className='input'>{user.username}</p>
                        </div>
                        <h3 className='categoty-title'>Name</h3>
                        <div className='content'>
                            <p className='input'>{user.name}</p>
                        </div>
                        <h3 className='categoty-title'>Email</h3>
                        <div className='content'>
                            <input className={`input ${isEditEmail ? 'edit' : ''}`} disabled={!isEditEmail} value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}></input>
                            <button className='edit-button' onClick={()=>handleEditEmail()}>{isEditEmail? 'SAVE' : 'EDIT'}</button>
                        </div>
                        <h3 className='categoty-title'>Telephone</h3>
                        <div className='content'>
                            <input className={`input ${isEditPhone ? 'edit' : ''}`} disabled={!isEditPhone} value={newPhone} onChange={(e)=>setNewPhone(e.target.value)}></input>
                            <button className='edit-button' onClick={()=>handleEditPhone()}>{isEditPhone? 'SAVE' : 'EDIT'}</button>
                        </div>
                        <h3 className='categoty-title'>Password</h3>
                        <div className='content'>
                            {isEditPassword? 
                            <form className='edit-password'>
                                <input className='input edit' type='password' placeholder='Current Password' minLength={4} value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)}></input>
                                <input className='input edit' type='password' placeholder='New Password' minLength={4} value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}></input>
                                <input className='input edit' type='password' placeholder='Repeat New Password' minLength={4} value={newPasswordRepeat} onChange={(e)=>setNewPasswordRepeat(e.target.value)}></input>
                            </form> :
                            <ProhibitIcon className='input' size={28} />}
                            <button className='edit-button' onClick={()=>handleEditPassword()}>{isEditPassword? 'SAVE' : 'EDIT'}</button>
                        </div>
                    </div>
                    <p className='errorMsg'>{message}</p>
                    <div className='Bttns'>
                        <button className='button' onClick={()=>navigate('/home')}>HOME</button>
                        <button className='button' onClick={logout}>LOGOUT<SignOutIcon size={13} /></button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default MyAccount;
