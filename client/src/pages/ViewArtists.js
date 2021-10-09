import React, {useState,useEffect} from 'react';
import axios from 'axios'

function ViewArtists(props) {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = async () => {
    try {
      let res = await axios.get('/api/users')
      setUsers(res.data)
    } catch (error) {
      
    }
  }

  const userCard = () =>{
    users.map(()=>{
      return(
        <div>HI</div>
      )
    })
  }

  return (
    <div>
      <h1>View Artists</h1>
    </div>
  );
}

export default ViewArtists;