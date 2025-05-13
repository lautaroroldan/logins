import './App.css'
import Home from './pages/home/home'
import { generateToken, messaging } from './notifications/firebase'
import { useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
function App() {

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload)
    })
  }, []);

  return (
    <>
      <Home />
    </>
  )
}

export default App
