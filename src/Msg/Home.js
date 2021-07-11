import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function Home(data) {

    const [userId, setUserId] = useState('')
    const [userData, setUserData] = useState('')

    const logout = () => {
        localStorage.removeItem('userId')
        console.log('logout!')
        window.location.reload()
    }

    useEffect(() => {
        setUserId(localStorage.getItem('userId'))
        
    }, [])

    return (
        <div>
            <h1>Hello {data.data.first} {data.data.last}</h1>
            <button type='submit' onClick={logout}>LogOut</button>
        </div>
    )
}
