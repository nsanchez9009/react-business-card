import './App.css'

import Picture from './components/Picture'
import Name from './components/Name'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Picture />
      <div className="mainContent">
        <Name />
        <Contact />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App
