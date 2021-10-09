import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewVenueForm from '../components/NewVenueForm';
import Venue from './Venue';

function ViewVenues(props) {
  const [venues, setVenues] = useState([])

  useEffect(()=> {
    getVenues()
  }, [])

  const getVenues = async () => {
    try {
      let res = await axios.get(`/api/venues`);
      setVenues(res.data);
    } catch (err) {
      console.log(err);
    };
  };

  
  const renderVenues = () => {
    return venues.map((v) => {
      return (
        <div key={v.id}>
          <Venue v={v} />
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Venues</h1>
      {renderVenues()}

    </div>
  )
}

export default ViewVenues;