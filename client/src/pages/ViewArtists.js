import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Card} from "semantic-ui-react"

function ViewArtists(props) {
  const [users, setUsers] = useState([])
  const [venues, setVenues] = useState([])

  useEffect(()=>{
    getUsers()
    getVenueInfo()
  },[])

  const getUsers = async () => {
    try {
      let res = await axios.get('/api/users')
      setUsers(res.data)
    } catch (error) {
      
    }
  }

  const getVenueInfo = async () => {
    let res = await axios.get(`/api/artistVenue`) 
    setVenues(res.data)
    console.log(venues)
  }

  const atVenue =(id) => {
    return venues.map((u)=>{
      if(u.artist_id == id){
        return (<div>{u.venues_name}</div>)
      }
      }
    )
  }

  const userCard = () =>{
    return users.map((u)=>{

      return(
        <Card fluid key={u.id}>
          <Card.Content>
          <Card.Header>{u.name}</Card.Header>
          <Card.Meta>
            <span> Genres: {u.genre} </span>
          </Card.Meta>
          <Card.Meta>
            Are currently playing at:
            {atVenue(u.id)}
          </Card.Meta>
        </Card.Content>
        </Card>
      )
    })
  }

  return (
    <div>
      <h1>Artists</h1>
      {userCard()}
    </div>
  );
}

export default ViewArtists;