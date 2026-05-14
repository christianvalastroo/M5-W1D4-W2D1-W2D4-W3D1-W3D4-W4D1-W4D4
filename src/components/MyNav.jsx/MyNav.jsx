import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"
import { useContext } from "react"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"
import { Link } from "react-router-dom"
import "./MyNav.css"

const MyNav = ({ search, setSearch }) => {
    const { theme, toggleTheme } = useContext(ThemeHome)

    return (
        <Navbar
            expand="lg"
            bg={theme === "dark" ? "dark" : "light"}
            variant={theme === "dark" ? "dark" : "light"}
        >
            <Container className={theme === "dark" ? "bg-dark text-light py-4" : "bg-light text-dark py-4"}>
                <Navbar.Brand as={Link} to="/">EpiBooks</Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>

                    <Form className="nav-search d-flex mt-3 mt-lg-0">
                        <Form.Control
                            className="nav-search-input"
                            type="search"
                            placeholder="Cerca un libro..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <Button
                            className="ms-2"
                            onClick={toggleTheme}
                            variant={theme === "light" ? "dark" : "light"}
                        >
                            {theme === "light" ? "Dark" : "Light"}
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    )
}

export default MyNav
