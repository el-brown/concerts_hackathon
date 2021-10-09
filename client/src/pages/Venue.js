import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import TicketForm from './TicketForm'

const Venue = (props) => {
  const [artists, setArtists] = useState([])
  const [showForm, setShowForm] = useState(false)
  const {v} = props
  useEffect(()=> {
    getArtistInfo()
  }, [])
  const getArtistInfo = async () => {
    let res = await axios.get(`/api/artistVenue`) 
    setArtists(res.data)
  }
  const atVenue =(id) => {
    return artists.map((a)=>{
      if(a.venues_id == id){
        return a.artist_name
      }
      }
    )
  }
return (
  <>
    <div style= {styles.card}>
      <h3>{v.name}</h3>
      <p>{v.street}</p>
      <p>{v.city}</p>
      <p>{v.state}</p>
      <p>Ticket Capacity: {v.ticket_capacity}</p>
      <p>Artist Playing Here: {atVenue(v.id)}</p>
      <Button onClick={(()=>{setShowForm(!showForm)})}>Get Tickets</Button>
      { showForm && <TicketForm /> }
      
    </div>
  </>
  )

}
const styles = {
  card: {
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    padding: "8px",
  }

}
export default Venue