import React, { useState,  useEffect } from "react"
import axios from "axios"
import { Button, Card, Col, Container, Row, image } from "react-bootstrap";

const Tickets = () => {
  const [venues, setVenues] = useState([]);
  
  useEffect(() => {
    getTickets()
  }, []);


  const normalizeData = (data) => {
    let ids = data.map((d) => d.venue_id);
    let  unique_ids = [...new Set(ids)];
    // console.log("ids", ids);
    // console.log("unique ids", unique_ids);
    return unique_ids.map((id) => {
      let tickets = data.filter((d) => d.venue_id === id);
      
      let {venue_name, street, city, state, ticket_capacity} = tickets[0];
      //  console.log("before:", tickets);
      //  console.log(tickets[0]);
      let venueTickets = tickets.map((t) => {
        return {
          price: t.price,
          concert: t.concert,
          time: t.time,
          quantity_in_stock: t.quantity_in_stock,
          id: t.id
        }
      })
      console.log("normdata", { tickets: venueTickets})
      return { tickets: venueTickets};
    });
  };

  const getTickets = async () => {
    try {
    let res = await axios.get("/api/tickets");
    console.log("resdata:", res.data);
    setVenues(normalizeData(res.data));
  } catch (err) {
    console.log(err);
  }
}


  const renderVenues = () => {
    return venues.map((v) => {
      return (
        <div className="card" style="width: 18rem;">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{v.venue_name}</li>
          <li className="list-group-item">{v.street}</li>
          <li className="list-group-item">{v.city}</li>
          <li className="list-group-item">{v.state}</li>
          <li className="list-group-item">{v.ticket_capacity}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
          {/* {renderTickets(v.tickets)} */}
        </div>
      </div>
      )
    })
    }


  const renderTickets = (tickets) => {
    return tickets.map((t) => {
      console.log("concert:", t.concert)
      return (
        <h1>Hi</h1>
        // <Card fluid>
        //   {/* <Card.Content>${t.price}</Card.Content>
        //   <Card.Content>{t.time}</Card.Content>
        //   <Card.Content>{t.concert}</Card.Content>
        //   <Card.Content>{t.quantity_in_stock}</Card.Content> */}
        // </Card>
      )
    })
  }


  return (
    <div>
      <h1>Tickets at Venues</h1>
      {renderVenues()}
    </div>
  );
};

export default Tickets;