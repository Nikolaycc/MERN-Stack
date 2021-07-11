import './App.css';
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userlist from './Components/userlist'
import UserPost from './Components/UserPost'
import NTL from './Msg/NTL';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { set } from 'mongoose';
import Home from './Msg/Home';
import NTR from './Msg/NTR';

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
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [gender, setGender] = useState('')
  const [data, setData] = useState([])
  const [userIdLocal, setUserIdLocal] = useState('')
  const [user, setUser] = useState(false)
  const [msgUser, setMsgUser] = useState([])
  const [stat, setStat] = useState(false)
  let urlb = localStorage.getItem('userId')

  useEffect(() => {
    gg()
    console.log(localStorage.getItem('userId'))
  }, [])

  const PostUser = () => {
    return axios
    .post('http://localhost:9090/user', {
      first: first,
      last: last,
      email: email,
      pass: pass
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => { 
      console.log(error);
    });
  }

  const gg = () => {
    return axios
        .get('http://localhost:9090/user/id/' + urlb)
        .then((res) => {
            setMsgUser(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }

  useEffect(() => {
    if (localStorage.getItem('userId') !== null){
      setStat(true)
    } else {
      setStat(false)
    }
  }, [])
  

  // const [randomUserJSON, setRandomUserJSON] = useState('')
  // const [userInfo, setUserInfo] = useState([])

  // useEffect(() => {
  //   RandomUser().then((randomData) => {
  //     setRandomUserJSON(JSON.stringify(randomData , null , 2 || 'No User Data Found! (404)'))
  //     setUserInfo(randomData.results)
      
  //   })

    
  // }, [])


    if (!stat) {
      return (
        <Router>
          <Switch>
            <Route extact path="/post" component={UserPost} />
            <Route path='/reg' component={NTR} />
            <Route path='/' component={NTL} />
          </Switch>
        </Router>
      )
    }
    
    const HomeV = () => {
      return(
        <Home data={msgUser} />
      )
    }

    if (stat) {
      return (
        <Router>
          <Switch>
            <Route extact path="/post" component={UserPost} />
            <Route path='/' component={HomeV} />
          </Switch>
        </Router>
      )
    }
  
  
}

export default App;
