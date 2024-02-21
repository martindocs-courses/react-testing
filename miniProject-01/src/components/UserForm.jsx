import { useState } from 'react';
import { PropTypes } from 'prop-types';

const UserForm = ({onUserAdd}) => {
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

    onUserAdd(user);
    handleEmptyInput();
  }
  
  // key Enter press
  const handleEnter = (e) => {
    const name = user.name;
    const email = user.email;
    
    if(name && email && e.key === 'Enter') {
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
          onKeyDown={handleEnter}
          />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input           
          type="email" 
          name="email"
          value={user.email}
          onChange={handleNewUser}          
          onKeyDown={handleEnter}
        />
      </div>

      <button type="submit">Add User</button>
    </form>
  )
}

UserForm.propTypes = {
  onUserAdd: PropTypes.func,
}

export default UserForm;