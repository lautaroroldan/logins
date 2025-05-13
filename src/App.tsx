import './App.css'
import Home from './pages/home/home'
import { generateToken, messaging } from './notifications/firebase'
import { useEffect, useState } from 'react';
import { onMessage } from 'firebase/messaging';
function App() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    generateToken().then((token) => {
      setToken(token || null);
    });
    onMessage(messaging, (payload) => {
      console.log(payload)
    })
  }, []);

  return (
    <>
      <Home />
      <div>{token}</div>
    </>
  )
}

export default App
