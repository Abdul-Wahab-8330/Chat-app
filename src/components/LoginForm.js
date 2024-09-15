import axios from 'axios';
import React, { useState } from 'react'
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "fe45c050-3ca2-41d8-93da-3aa1fcd2aedb", 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();

        } catch (error) {
            setError('Oops! Incorrect credentials');
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align="center">
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
