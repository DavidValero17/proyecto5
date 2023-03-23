
import './App.css'

import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body'


function App() {

  return (
    <div className="App">
      <div className='NavBar'><Header /></div>
      <Body />
    </div>
  )
}

export default App
