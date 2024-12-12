import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <header><Header/></header>
      <main><AppRouter/></main>
      <footer><Footer/></footer>
    </Router>
  )
}

export default App
