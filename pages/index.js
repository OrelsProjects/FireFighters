import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Router from 'next/router';

export default function Home() {

    useEffect(() => {
        Router.push('login')
    })

    return (<div></div>)
}