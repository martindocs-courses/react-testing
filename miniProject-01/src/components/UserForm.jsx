import { useState } from 'react';
import { PropTypes } from 'prop-types';

const UserForm = ({onUserAdd}) => {
//  console.log(onUserAdd())
  const[user, setUser] = useState({
    name: '',
    email: '',
  })

  const handleEmptyInput = () => {
    setUser({
      name: '',
      email: '',
    })
  }

  // input change
  const handleNewUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({...user, [name]: value});   
  }

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if(user.name && user.email) {
      console.log('Submitting form with user:', user);
      
      onUserAdd(user);
      handleEmptyInput();
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input           
          type="text" 
          name="name"
          value={user.name}
          onChange={handleNewUser}
          />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input           
          type="email" 
          name="email"
          value={user.email}
          onChange={handleNewUser}  
        />
      </div>

      <button type="submit">Add User</button>
    </form>
  )
}

UserForm.propTypes = {
  onUserAdd: PropTypes.func.isRequired,
}

export default UserForm;