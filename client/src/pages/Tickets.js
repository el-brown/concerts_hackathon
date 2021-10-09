import React, { useState,  useEffect } from "react"
import axios from "axios"
import { Button, Card, Col, Container, Row, image } from "react-bootstrap";

const Tickets = () => {
  const [venues, setVenues] = useState([]);
  
  useEffect(() => {
    getTickets();
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
      return { venue_name, ticket_capacity, street, city, state, tickets: venueTickets};
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
    return venues.map((s) => {
      return (
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{v.venue_name}</li>
          <li class="list-group-item">{v.street}</li>
          <li class="list-group-item">{v.city}</li>
          <li class="list-group-item">{v.state}</li>
          <li class="list-group-item">{v.ticket_capacity}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
          {renderTickets(v.tickets)}
        </div>
      </div>
      )
        {/* <List>
          <List.Content>{v.venue_name}</List.Content>
          <List.Content>{v.street}</List.Content>
          <List.Content>{v.city}</List.Content>
          <List.Content>{v.state}</List.Content>
          <List.Content>{v.ticket_capacity}</List.Content>
          {renderTickets(v.tickets)}
        </List> */}
    })
    },
  }

  const renderTickets = (tickets) => {
    return tickets.map((p) => {
      {console.log("concert:", t.concert)}
      return (
        <Card fluid>
          <Card.Content>${t.price}</Card.Content>
          <Card.Content>{t.time}</Card.Content>
          <Card.Content>{t.concert}</Card.Content>
          <Card.Content>{t.quantity_in_stock}</Card.Content>
        </Card>
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