import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setError('Password must be at least 8 characters.');
    } else if (!/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
      setError('Password must be alphanumeric.');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="password" value={password} onChange={handleChange} placeholder="Enter password" />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
