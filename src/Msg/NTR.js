import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function NTR() {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [gender, setGender] = useState('')
    const [data, setData] = useState([])

    const PostUser = () => {
        return axios
        .get("http://localhost:9090/user/" + email)
        .then((res) => {
            if (res.data !== null){
                console.log('es emaili ukve gamoyenebulia')
            } else {
                return axios
                .post('http://localhost:9090/user', {
                first: first,
                last: last,
                email: email,
                pass: pass
                })
                .then((response) => {
                console.log(response);
                window.location.href = '/'
                })
                .catch((error) => { 
                console.log(error);
                });
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
    }
    


    return (
        <>
        <Form className='formm' >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>FirstName</Form.Label>
        <Form.Control onChange={e => setFirst(e.target.value)} type="name" placeholder="Enter Firstname" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control onChange={e => setLast(e.target.value)} type="name" placeholder="Enter Lastname" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={e => setEmail(e.target.value)} type="name" placeholder="Enter Gender" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={e => setPass(e.target.value)} type="name" placeholder="Enter Gender" />
      </Form.Group>
    
      <center>
        <Button onClick={PostUser} variant="primary" >
          Submit
        </Button>
      </center>
    </Form>
    </>
    )
}
