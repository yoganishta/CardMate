import React, { useState } from 'react';

export const UpdateUserForm = ({ setMsg }) => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [number, setNumber] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3500/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, card, number }),
      });

      if (!response.ok) throw new Error('Failed to update user. Please try again.');

      setMsg(`User with ID ${userId} updated successfully.`);
      setUserId('');
      setName('');
      setCard('');
      setNumber('');
    } catch (error) {
      setMsg(error.message);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User ID</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
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
        <button type="submit" className="btn btn-warning">Update</button>
      </form>
    </div>
  );
};
