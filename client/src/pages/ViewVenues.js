import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  // const deleteReward = async(id) => {
  //   try {
  //     await axios.delete(`/api/venues/${venue_id}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  const renderVenues = () => {
    return venues.map((v) => {
      return (
        <div key={v.id}>
          <p>venue</p>
          <p>{v.name}</p>
          <p>{v.city}</p>
          {/* <Venue venue={v} deleteReward={deleteReward} /> */}
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Venues</h2>
      {renderVenues()}
    </div>
  )
}

export default ViewVenues;