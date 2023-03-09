import { useState } from 'react';
import './App.css';
import Counter from './components';
import { KeepAlive, AliveScope } from 'react-activation';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AliveScope>
      {isVisible ? (
        <KeepAlive>
          <Counter />
        </KeepAlive>
      ) : null}

      <br />
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Gizle' : 'Göster'}
      </button>
    </AliveScope>
  );
}

export default App;
