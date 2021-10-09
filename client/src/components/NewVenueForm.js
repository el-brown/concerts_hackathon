import axios from 'axios'
import React, { useState } from 'react'
import { Form, Input, TextArea, Button, Select, Header, Segment } from 'semantic-ui-react'

const stateOptions = [
  { key: 'az', text: 'Arizona', value: 'Arizona' },
  { key: 'co', text: 'Colorado', value: 'Colorado' },
  { key: 'id', text: 'Idaho', value: 'Idaho' },
  { key: 'ut', text: 'Utah', value: 'Utah' },
  { key: 'nm', text: 'New Mexico', value: 'New mexico' },
  { key: 'ne', text: 'Nevada', value: 'Nevada' },
  { key: 'mt', text: 'Montana', value: 'Montana' },
]


const NewVenueForm = () => {
  const [venueName, setVenueName] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [ticketCapacity, setTicketCapacity] = useState(0)

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(state)
    try {
      axios.post(`/api/venues`, { 
        name: venueName, 
        street, 
        city, 
        state, 
        ticket_capacity : ticketCapacity
      })
      setVenueName('');
      setStreet('');
      setCity('');
      setState('')
      setTicketCapacity(0);
    } catch (error) {
      console.log(error)
    }
  };

  const handleDropdown = (e, value) => {
    setState(value.value)
  }

  return (
  <div>
    <Header>New Venue</Header>
    <Form onSubmit={submitHandler}>
      <Form.Group widths='equal'>
        <Form.Field
          required
          id='form-input-control-name'
          control={Input}
          label='Venue Name'
          placeholder='Venue name'
          value={venueName}
          onChange={e => setVenueName(e.target.value)}
        />
        <Form.Field
          id='form-input-control-ticket-capacity'
          control={Input}
          label='Ticket Capacity'
          placeholder='Ticket Capacity'
          value={ticketCapacity}
          onChange={e => setTicketCapacity(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
      <Form.Field
          id='form-input-control-street'
          control={Input}
          label='Street'
          placeholder='Street'
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
        <Form.Field
          id='form-input-control-city'
          control={Input}
          label='City'
          placeholder='City'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <Form.Field
          control={Select}
          options={stateOptions}
          label={{ children: 'State', htmlFor: 'form-select-control-state' }}
          placeholder='State'          
          value={state}
          onChange={handleDropdown}
         />
        </Form.Group>
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Confirm'
          label='Label'
        />
      </Form>
  </div>
)

}

export default NewVenueForm;