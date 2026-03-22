import Navbar from "./components/NavBar"
import "./styles/layout.css"
function App() {

  return (
    <div className="app">
      <Navbar/>

      <main className="app__content">
        <h1>Dashboard</h1>
      </main>
    </div>
  )
}

export default App
