import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
