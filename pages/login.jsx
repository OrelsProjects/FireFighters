import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';
import Input from '../components/Input';


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onPasswordChange = (event) => {

    }

    const onEmailChange = (event) => {

    }
    return (<div className={`${styles.container}`}>
        <Input placeholder='Email' onChange={onEmailChange} />
        <Input placeholder='Password' onChange={onPasswordChange} />
    </div>)
}