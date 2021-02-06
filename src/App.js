import './App.css';
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userlist from './Components/userlist'

const RandomUser = () => {
  return axios
    .get("https://randomuser.me/api")
    .then((res) => {
      res.json()
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

const GetUser = () => {
  return axios
    .get("http://localhost:9090/user")
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}



// TODO: make post method

function App() {

  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [gender, setGender] = useState('')
  const [data, setData] = useState([])

  const PostUser = () => {
    return axios
    .post('http://localhost:9090/user', {
      first: first,
      last: last,
      gender: gender
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => { 
      console.log(error);
    });
  }

  useEffect(() => {
    GetUser().then((user) => {
      setData(user.data)
    })
  }, [])

  // const [randomUserJSON, setRandomUserJSON] = useState('')
  // const [userInfo, setUserInfo] = useState([])

  // useEffect(() => {
  //   RandomUser().then((randomData) => {
  //     setRandomUserJSON(JSON.stringify(randomData , null , 2 || 'No User Data Found! (404)'))
  //     setUserInfo(randomData.results)
      
  //   })

    
  // }, [])

  

  return (
    <>
    {/* <p>userdata</p>
    {
      userInfo.map((info, idx) => {
        return (
        <div key={idx} >
          <p>{info.name.first}</p>
          <p>{info.name.last}</p>
          <img src={info.picture.medium}></img>
        </div>
        )
      })
    } */
    }

    <Form className='formm' >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>FirstName</Form.Label>
        <Form.Control onChange={e => setFirst(e.target.value)} type="name" placeholder="Enter Firstname" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control onChange={e => setLast(e.target.value)} type="name" placeholder="Enter Lastname" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <Form.Control onChange={e => setGender(e.target.value)} type="name" placeholder="Enter Gender" />
      </Form.Group>
    
      <center>
        <Button onClick={PostUser} variant="primary" type="submit">
          Submit
        </Button>
      </center>
    </Form>

    <Userlist />
    </>
  );
}

export default App;
