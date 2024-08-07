import React, { useEffect, useState } from 'react';

export const ViewUser = ({ setMsg }) => {
  const [users, setUsers] = useState([]);

  const request = async (url = "http://localhost:3500/users") => {
    try {
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) throw new Error("Please reload the app");

      const data = await response.json();
      console.log("Fetched data:", data); // Debugging line

      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setMsg("Unexpected data format received.");
      }

    } catch (err) {
      setMsg(err.message);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div className="view-user-container">
      <h2>View Users</h2>
      {setMsg && <p className="error-msg">{setMsg}</p>}
      <div className="user-list">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <h3>{user.name}</h3>
              <p><strong>Card:</strong> {user.card}</p>
              <p><strong>Number:</strong> {user.number}</p>
            </div>
          ))
        ) : (
          <p>No user data available.</p>
        )}
      </div>
    </div>
  );
};
