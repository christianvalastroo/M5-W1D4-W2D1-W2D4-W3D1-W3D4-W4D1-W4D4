import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Alert, Card, Container } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"
import CommentArea from "../CommentArea/CommentArea"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"

const BookDetails = () => {
    const { asin } = useParams()
    const { theme } = useContext(ThemeHome)
    const book = fantasy.find((book) => book.asin === asin)

    if (!book) {
        return (
            <Container>
                <Alert variant="danger">Libro non trovato</Alert>
            </Container>
        )
    }

    return (
        <Container className="py-4 text-center">
            <h1 className="mb-4">Dettaglio libro</h1>

            <Card
                className={theme === "dark" ? "bg-dark text-light border-secondary" : "bg-light text-dark mx-auto mt-4"}
                style={{ maxWidth: "450px" }}
            >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Categoria: {book.category}</Card.Text>
                    <Card.Text>Prezzo: {book.price} €</Card.Text>
                    <Card.Text>Codice libro: {book.asin}</Card.Text>
                </Card.Body>
            </Card>

            <CommentArea selected={book.asin} />
        </Container>
    )
}

export default BookDetails
