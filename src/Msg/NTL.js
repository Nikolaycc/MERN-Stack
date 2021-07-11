import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function NTL() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const conlog = () => {
        return axios
        .get("http://localhost:9090/user/" + email)
        .then((res) => {
            console.log(res)
            if (res.data == null) {
                console.log(' not found email or pass')
            } else {
                if (res.data.pass == pass) {
                    localStorage.setItem('userId', res.data._id)
                    console.log("pass done!")
                    window.location.reload()
                } else {
                    console.log("not pass done!")
                }
            }
            return res
        })
        .catch((err) => {
          console.log(err)
        })
    }
    
    useEffect(() => {
        console.log(" error" + error)

        if (localStorage.getItem('userId') !== null ) {
            console.log(localStorage.getItem('userId'))
        } else {
            console.log('user not logged')
        }
    }, [])

    
    return (
        <div className='log'>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e => setPass(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={conlog} variant="primary">
                Submit
            </Button>
            </Form>
        </div>
    )
}
