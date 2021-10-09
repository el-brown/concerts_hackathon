import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { AuthContext } from '../../providers/AuthProvider';

function EditUser (props){
  const {user: currentUser, setUser: setCurrentUser} = useContext(AuthContext)
  const [name, setName] = useState(currentUser.name)
  const [genre, setGenre] = useState(currentUser.genre)
  const handleSubmit = async (e) => {
    try {
      let res = await axios.put(`/api/users/${currentUser.id}`, {name: name, genre: genre})
      setCurrentUser(res.data)
      props.history.push("/user")
    } catch (err) {
      
    }
  }
  return (
    <div>
      <h1>Hi {currentUser.name}, you are currently editing your info</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Artist's Name</label>
          <input
          placeholder={name}
          value = {name}
          onChange = {(e)=> {setName(e.target.value)}}
          />
        </Form.Field>
        <Form.Field>
          <label>Genre</label>
          <input
          placeholder={genre}
          value = {genre}
          onChange = {(e) => {setGenre(e.target.value)}}
          />
        </Form.Field>
      <Button.Group>
        <Button color="blue" type="submit">Edit Account</Button>
        <Link to={`/user`}>
          <Button color="red">Cancel Edit</Button>
        </Link>
      </Button.Group>
      </Form>
    </div>
  );
}

export default EditUser;