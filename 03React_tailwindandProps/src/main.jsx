import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Components/adi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card username="Aditya" btntxt="dbba de"/>
    <Card username="animesh" btntxt="press me"/>
    <Card username="me" btntxt="Click me"/> 
  </StrictMode>,
)
//using this username and declaring it in adi.jsx we can give default names and values in same fn