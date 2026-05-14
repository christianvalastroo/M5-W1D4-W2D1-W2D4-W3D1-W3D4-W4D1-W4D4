import { useContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ThemeHome, ThemeProvider } from "./context/ThemeHome/ThemeHome"
import "./App.css"

import MyNav from "./components/MyNav.jsx/MyNav"
import Welcome from "./components/Welcome/Welcome"
import AllTheBooks from "./components/AllTheBooks/AllTheBooks"
import MyFooter from "./components/MyFooter.jsx/MyFooter"
import BookDetails from "./components/BookDetails/BookDetails"
import NotFound from "./components/NotFound/NotFound"





const AppContent = () => {
  const [search, setSearch] = useState("")
  const { theme } = useContext(ThemeHome)

  return (
    <div className={`app-wrapper ${theme === "dark" ? "app-dark" : "app-light"}`}>
      <MyNav
        search={search}
        setSearch={setSearch}
      />

      <main className="main-content">
        <Welcome />

        <Routes>
          <Route path="/" element={<AllTheBooks search={search} />} />
          <Route path="/book/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>

      <MyFooter />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
