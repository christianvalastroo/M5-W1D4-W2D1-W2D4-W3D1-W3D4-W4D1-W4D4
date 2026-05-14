import { useParams } from "react-router-dom"
import { Alert, Card, Container } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"

const BookDetails = () => {
    const { asin } = useParams()
    const book = fantasy.find((book) => book.asin === asin)

    if (!book) {
        return (
            <Container>
                <Alert variant="danger">Libro non trovato</Alert>
            </Container>
        )
    }

    return (
        <Container>
            <h1>Dettaglio libro</h1>

            <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Categoria: {book.category}</Card.Text>
                    <Card.Text>Prezzo: {book.price} €</Card.Text>
                    <Card.Text>Codice libro: {book.asin}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default BookDetails
