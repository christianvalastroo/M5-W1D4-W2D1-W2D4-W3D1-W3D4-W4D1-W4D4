import MyNav from "./components/MyNav.jsx/MyNav"
import Welcome from "./components/Welcome/Welcome"
import AllTheBooks from "./components/AllTheBooks/AllTheBooks"
import MyFooter from "./components/MyFooter.jsx/MyFooter"
import { ThemeHome, ThemeProvider } from "./context/ThemeHome/ThemeHome"
import "./App.css"
import { useContext, useState } from "react"

const AppContent = () => {
  // Stato usato dalla navbar per filtrare i libri.
  const [search, setSearch] = useState("")
  const { theme } = useContext(ThemeHome)

  return (
    <div className={`app-wrapper ${theme === "dark" ? "app-dark" : "app-light"}`}>
      {/* Navbar principale del sito. */}

      <MyNav
        search={search}
        setSearch={setSearch}
      />

      <main className="main-content">
        <Welcome />

        {/* Lista dei libri filtrata dal testo scritto nella navbar. */}
        <AllTheBooks
          search={search}
        />
      </main>

      <MyFooter />
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
