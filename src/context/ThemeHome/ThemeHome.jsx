import { createContext, useState } from "react"

export const ThemeHome = createContext()

export const ThemeProvider = ({ children }) => {
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
