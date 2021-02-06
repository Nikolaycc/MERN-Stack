import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'

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

export default function Userlist() {

    const [datan, setDatan] = useState([])

    useEffect(() => {
        GetUser().then((user) => {
          setDatan(user.data)
          console.log(user)
        })
        console.log(datan)
      }, [])

    return (
        <div>
             {
                datan.map((info, idx) => {
                    return (
                        <div className='mm jj' key={idx} >
                            <center>
                                <h3><b>User</b>:</h3>
                                <p>{info.first}</p>
                                <p>{info.last}</p>
                                <p>{info.gender}</p>
                            </center>
                        </div>
                    )
                })
            }
        </div>
    )
}
