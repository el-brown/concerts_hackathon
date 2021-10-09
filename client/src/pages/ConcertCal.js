import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import axios from 'axios';

export default function ConcertCal(){

  const [ticket, setTickets] = useState([])

  useEffect(() => {
    getTickets()
  }, []);

  const getTickets = async () => {
    try {
    let res = await axios.get("/api/tickets");
    console.log("resdata:", res.data);
    setTickets(res.data);
  } catch (err) {
    console.log(err);
  }
}
  let eventsData = []
  const event = ()=> {
    ticket.map((t)=>{
      eventsData.push({ title: t.concert, date: t.time})
    })
  }

  event()

  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      events= {eventsData}
    />
  )

}