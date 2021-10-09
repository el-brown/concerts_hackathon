import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';

function User(props) {
  const {user: currentUser, setUser:setCurrentUser} = useContext(AuthContext)
  console.log(currentUser)

  const deleteUser = async (id) => {
    console.log("entered delete")
    let delete_id = id
    try {
      setCurrentUser(null)
      props.history.push("/login")
      await axios.delete(`/api/users/${delete_id}`)
    } catch (error) {
      
    }
  }

  return (
    <div>
      <h1>Hi {currentUser.name}</h1>
      <h3>Your genres of music include: {currentUser.genre}</h3>
      <Button.Group>
        <Link to={`/user/edit`}>
          <Button color="blue">Edit Account</Button>
        </Link>;  
        <Button color="red" onClick={() => deleteUser(currentUser.id)}>Delete Account</Button>
      </Button.Group>
    </div>
  );
}

export default User;