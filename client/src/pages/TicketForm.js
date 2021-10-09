import axios from 'axios'
import React, { useState } from 'react'
import { Form, Input, TextArea, Button, Card, CardContent, Message } from 'semantic-ui-react'

const TicketForm = () => {
  const [showMessage, setShowMessage] = useState(false)

  return (
  <div>
      <Card>
        <CardContent>
          <Form >
              <Form.Field
                id='form-input-control-name'
                control={Input}
                label='Name'
                placeholder="Name"
              />
              <Form.Field
                id='form-input-control-ticket-capacity'
                control={Input}
                label='Number of Tickets'
                placeholder='Number of Tickets'
              />
            <Form.Field
                id='form-input-control-street'
                control={Input}
                label='Email'
                placeholder='Email'
              />
            <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Confirm'
              onClick={(()=>{setShowMessage(!showMessage)})}
              />
              {showMessage && "Your tickets have been emailed to you"
            }
        </Form>
      </CardContent>
    </Card>
  </div>
)
  }


export default TicketForm;