import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Header/>
      <main><AppRouter/></main>
      <Footer/>
    </Router>
  )
}

export default App
