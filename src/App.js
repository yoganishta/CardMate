// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';
import { DeleteUserForm } from './DeleteUserForm';
import { CreateUserForm } from './CreateUserForm';
import { ViewUser } from './ViewUser';
import { UpdateUserForm } from './UpdateUserForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentAction, setCurrentAction] = useState('');
  const [msg, setMsg] = useState('');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [card, setCard] = useState('');

  useEffect(() => {
    const checkSession = () => {
      const expiresAt = sessionStorage.getItem('expiresAt');
      if (expiresAt && new Date().getTime() > expiresAt) {
        alert('Session expired. Please log in again.');
        setIsAuthenticated(false);
        sessionStorage.clear();
      }
    };

    checkSession();
    const interval = setInterval(checkSession, 1000); // Check session every second

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.clear();
  };

  if (!isAuthenticated) {
    return <LoginForm setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div className="container">
      <h1>User Management</h1>
      <button onClick={handleLogout} className="btn btn-secondary mb-3">Logout</button>
      <div className="btn-group mb-3">
        <button className="btn btn-primary" onClick={() => setCurrentAction('create')}>Create User</button>
        <button className="btn btn-danger" onClick={() => setCurrentAction('delete')}>Delete User</button>
        <button className="btn btn-info" onClick={() => setCurrentAction('view')}>View User</button>
        <button className="btn btn-warning" onClick={() => setCurrentAction('update')}>Update User</button>
      </div>
      <div>
        {currentAction === 'create' && <CreateUserForm 
          user={user}
          setCard={setCard}
          setNumber={setNumber}
          setUser={setUser}
          card={card}
          number={number}
          name={name}
          setName={setName}/>}
        {currentAction === 'delete' && <DeleteUserForm setMsg={setMsg} />}
        {currentAction === 'view' && <ViewUser users={users} setUsers={setUsers} msg={msg} setMsg={setMsg} />}
        {currentAction === 'update' && <UpdateUserForm setMsg={setMsg} />}
      </div>
    </div>
  );
}

export default App;
