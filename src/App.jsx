
import './App.css'
import CarouselHome from './common/Carousel/Carousel'
import Footer from './common/Footer/Footer'

import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body'


function App() {

  return (
    <div className="App">
      <div className='NavBar'><Header /></div>
      <div><Footer /></div>
      <Body />
    </div>
  )
}

export default App
