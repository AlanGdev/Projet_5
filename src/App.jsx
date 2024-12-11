import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './components/AppRouter'

function App() {

  return (
    <Router>
      <Header/>
      <main>
        <AppRouter/>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
