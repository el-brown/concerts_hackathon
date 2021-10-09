import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';

function User() {
  const {user: currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div>
      <h1>Hi {currentUser.name}</h1>
      <h3>Your genres of music include: {currentUser.genre}</h3>
      <Button.Group>
        <Link to={`/user/edit`}>
          <Button color="blue">Edit Account</Button>
        </Link>;  
        <Button color="red">Delete Account</Button>
      </Button.Group>
    </div>
  );
}

export default User;