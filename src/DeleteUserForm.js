import React, { useState } from 'react';

export const DeleteUserForm = ({ setMsg }) => {
  const [userId, setUserId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3500/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete user. Please try again.');

      setMsg(`User with ID ${userId} deleted successfully.`);
      setUserId('');
    } catch (error) {
      setMsg(error.message);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleDelete}>
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
        <button type="submit" className="btn btn-danger">Delete</button>
      </form>
    </div>
  );
};
