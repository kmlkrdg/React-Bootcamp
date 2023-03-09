import './App.css';
import { useState } from 'react';
import User from './components/User';
import Counter from './components/Counter';

function App() {
  const [users, setUsers] = useState([{ id: 1, name: 'Mete' }]);

  const handleClick = () => {
    setUsers((prev) => [
      { id: Math.floor(Math.random() * 100), name: 'Selen' },
      ...prev,
    ]);
  };

  return (
    <div className='App'>
      {/* <h2>Uses({users.length})</h2>

      {users.map((user, i) => (
        <div key={user.id}>
          {i + 1}. {user.name}
        </div>
      ))}

      <button onClick={handleClick}>Add</button> */}

      {/* <User /> */}

      <Counter />
    </div>
  );
}

export default App;
