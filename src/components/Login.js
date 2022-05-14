import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async() => {               
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
    }

    const login = async(event) => {
        event.preventDefault();               
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            const user = res.user;
            console.log(user);
            navigate('/');
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='login__image'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={ login }>
                    <h5>E-mail</h5>
                    <input type='text' value={ email } onChange={ e => setEmail(e.target.value) } />

                    <h5>Password</h5>
                    <input type='password' value={ password } onChange={ e => setPassword(e.target.value) } />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={ register }>Create your Amazon Account</button>
            </div>
        </div>
    )
}
