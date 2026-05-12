import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"
import { useContext } from "react"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"

const MyNav = ({ search, setSearch }) => {
    const { theme, toggleTheme } = useContext(ThemeHome)

    return (
        <Navbar
            bg={theme === "dark" ? "dark" : "light"}
            variant={theme === "dark" ? "dark" : "light"}
        >
            <Container className={theme === "dark" ? "bg-dark text-light py-4" : "bg-light text-dark py-4"}>
                <Navbar.Brand href="/">EpiBooks</Navbar.Brand>

                <Nav>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Browse</Nav.Link>
                </Nav>

                <Form.Control
                    type="search"
                    placeholder="Cerca un libro.."
                    className="ms-3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Button className="ms-3" onClick={toggleTheme}>
                    {theme === "light" ? "Dark" : "Light"}
                </Button>
            </Container>
        </Navbar>
    )
}

export default MyNav
