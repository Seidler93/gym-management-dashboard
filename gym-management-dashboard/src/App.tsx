import Navbar from "./components/Navbar"
import "./styles/layout.css"
import AppRouter from "./routes/AppRouter"
function App() {

  return (
    <div className="app">
      <Navbar/>

      <main className="app__content">
        <AppRouter/>
      </main>
    </div>
  )
}

export default App
