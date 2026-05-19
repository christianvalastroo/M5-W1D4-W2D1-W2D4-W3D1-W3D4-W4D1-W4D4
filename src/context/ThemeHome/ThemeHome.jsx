import { createContext, useState } from "react"

export const ThemeHome = createContext()

export const ThemeProvider = ({ children }) => {
    // Il tema resta nel provider così ogni componente può leggerlo dallo stesso context.
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeHome.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeHome.Provider>
    )
}
