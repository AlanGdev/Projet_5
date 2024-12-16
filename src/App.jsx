import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'

function App() {

  return (
    <div className='appli'>
      <div className='appli__content'>
        <Router>
          <Header/>
          <main><AppRouter/></main>
          
        </Router>
      </div>
      <Footer/>
    </div>
  )
}

export default App
