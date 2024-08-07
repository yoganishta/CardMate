import React, { useState } from 'react';

export const CreateUserForm = () => {
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [number, setNumber] = useState('');

  const createUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3500/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, card, number }),
      });

      if (!response.ok) throw new Error('Failed to create user');

      const result = await response.json();
      alert('User created successfully');

      // Clear form fields after successful submission
      setName('');
      setCard('');
      setNumber('');

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={createUser}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};
