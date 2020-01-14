import React, { useState, useEffect } from 'react';
import { url, version } from '../../_api.json';

const APIURL = `${url}/${version}/auth`;

const LoginPage = () => {
    const [isAuthenticated, setAuth] = useState(false);


    // @c credentials
    async function makeAuth(c) {
        try {
            const response = await fetch(APIURL, { method : 'POST', body : c });
            if (response.status == 401) {
                return response.text();
            }
            else {
                const json = response.json();
                return json;
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // @fd form data
        const fd = new FormData(event.target);
        makeAuth(fd);
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <input type='text' name='username' placeholder='Username'></input>
            <input type='password' name='password' placeholder='Password'></input>
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginPage;