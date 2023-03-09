import React, { useState } from 'react';

function User() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, name: 'Can', surname: 'Çetin' },
    { id: 2, name: 'Ersin', surname: 'Deniz' },
  ]);

  const handleClick = () => {
    if (!selectedUserId) {
      return;
    }

    const cloned = [...users];
    const index = users.findIndex((user) => user.id == selectedUserId);
    cloned[index].name = 'Samet';

    setUsers(cloned);
  };

  return (
    <div>
      <h2>User</h2>
      <div style={{ fontSize: 11 }}>
        <pre>{JSON.stringify(users, null, 4)}</pre>
      </div>

      <div style={{ marginTop: 40 }}>
        <select onChange={(e) => setSelectedUserId(e.target.value)}>
          <option value=''>Seçiniz</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>
      </div>

      <button onClick={handleClick}>Change the name</button>
    </div>
  );
}

export default User;
