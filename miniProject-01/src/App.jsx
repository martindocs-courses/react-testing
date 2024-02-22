import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {
  const[userList, setUserList] = useState([]);

  const onUserAdd = (user) => {
    setUserList([...userList, user]);
  }

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList userList={userList} />
    </>
  )
}

export default App;
