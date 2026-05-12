import { useContext } from "react"
import { Alert } from "react-bootstrap"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"

const Welcome = () => {
    const { theme } = useContext(ThemeHome)

    return (
        <Alert
            variant={theme === "dark" ? "dark" : "secondary"}
            className="text-center"
        >
            <h1>Benvenuto su EpiBooks 📚</h1>
            <p>Scegli il tuo libro preferito</p>
        </Alert>
    )
}

export default Welcome
