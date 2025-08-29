import { useContext, useState } from 'react'
import '../styles/myaccount.css';
import { AuthenticationContext } from '../contexts/authentication-context';
import { GobackButton } from '../components/buttons/goback-button';
import { ProhibitIcon, SignOutIcon } from '@phosphor-icons/react';

export const MyAccount = () => {
    const { user, logout, navigate, editEmail, editPhone, editPassword, checkPassword } = useContext(AuthenticationContext);

    const [ newEmail, setNewEmail ] = useState(user.email);
    const [ newPhone, setNewPhone ] = useState(user.telephone);
    const [ currentPassword, setCurrentPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ newPasswordRepeat, setNewPasswordRepeat ] = useState('');

    const [ isEditEmail, setIsEditEmail ] = useState(false);
    const [ isEditPhone, setIsEditPhone ] = useState(false);
    const [ isEditPassword, setIsEditPassword ] = useState(false);

    const [ message, setMessage ] = useState("");
    
    const handleEditEmail = async () => {
        setIsEditPhone(false);
        setIsEditPassword(false);
        setMessage("");
        if(isEditEmail) {
            await editEmail(user.username, newEmail);
            setMessage('YOUR EMAIL ADDRESS IS UPDATED');
        }
        setIsEditEmail(!isEditEmail);
    };
    const handleEditPhone = async () => {
        setIsEditEmail(false);
        setIsEditPassword(false);
        setMessage("");
        if(isEditPhone) {
            await editPhone(user.username, newPhone);
            setMessage('YOUR TELEPHONE IS UPDATED');
        }
        setIsEditPhone(!isEditPhone);
    };
    const handleEditPassword = async () => {
        setIsEditPhone(false);
        setIsEditEmail(false);
        setMessage("");
        if(isEditPassword) {
            if (!(newPassword.length > 3 && newPasswordRepeat.length > 3 )) {
                setMessage("PASSWORD MINIMUM 4 LETTERS");
                return;
            } else if (!await checkPassword(user.username, currentPassword)) {
                setMessage("YOUR CURRENT PASSWORD IS NOT CORRECT");
                return;
            } else if (newPassword !== newPasswordRepeat) {
                setMessage("YOUR NEW PASSWORDS DO NOT MATCH");
                return;
            }
            await editPassword(user.username, newPassword);
            setMessage('YOUR PASSWORD IS UPDATED');
            setCurrentPassword('');
            setNewPassword('');
            setNewPasswordRepeat('');
        }
        setIsEditPassword(!isEditPassword);
    };

    return (
        <div className='myaccount'>
            <GobackButton />
            <h1>MY ACCOUNT</h1>
            <div className='account-info'>
                <h3 className='categoty-title'>Username</h3>
                <div className='content'>
                    <p>{user.username}</p>
                </div>
                <h3 className='categoty-title'>Name</h3>
                <div className='content'>
                    <p>{user.name}</p>
                </div>
                <h3 className='categoty-title'>Email</h3>
                <div className='content'>
                    <input className={`input ${isEditEmail ? 'edit' : ''}`} disabled={!isEditEmail} value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}></input>
                    <button onClick={()=>handleEditEmail()}>{isEditEmail? 'SAVE' : 'EDIT'}</button>
                </div>
                <h3 className='categoty-title'>Telephone</h3>
                <div className='content'>
                    <input className={`input ${isEditPhone ? 'edit' : ''}`} disabled={!isEditPhone} value={newPhone} onChange={(e)=>setNewPhone(e.target.value)}></input>
                    <button onClick={()=>handleEditPhone()}>{isEditPhone? 'SAVE' : 'EDIT'}</button>
                </div>
                <h3 className='categoty-title'>Password</h3>
                <div className='content'>
                    {isEditPassword? 
                    <form className='edit-password'>
                        <input className='input edit' type='password' placeholder='Current Password' minLength={4} value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)}></input>
                        <input className='input edit' type='password' placeholder='New Password' minLength='4' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}></input>
                        <input className='input edit' type='password' placeholder='Repeat New Password' minLength='4' value={newPasswordRepeat} onChange={(e)=>setNewPasswordRepeat(e.target.value)}></input>
                    </form> :
                    <ProhibitIcon size={23} />}
                    <button onClick={()=>handleEditPassword()}>{isEditPassword? 'SAVE' : 'EDIT'}</button>
                </div>
            </div>
            <p className='errorMsg'>{message}</p>
            <div className='Bttns'>
                <button className='button' onClick={()=>navigate('/home')}>HOME</button>
                <button className='button' onClick={logout}>LOGOUT<SignOutIcon size={18} /></button>
            </div>
        </div>
    )
}
export default MyAccount;
