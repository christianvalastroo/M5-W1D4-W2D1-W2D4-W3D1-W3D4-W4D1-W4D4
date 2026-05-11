import { Container, Row, Col } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"
import SingleBook from "../SingleBook/SingleBook"
import Alert from "react-bootstrap/Alert"
import CommentArea from "../CommentArea/CommentArea"
import { useState } from "react"

const AllTheBooks = ({ search }) => {

    // Salvo l'asin del libro selezionato per caricare le sue recensioni.
    const [selected, setSelected] = useState(null)

    // Mostro solo i libri che corrispondono alla ricerca.
    const filteredBooks = fantasy.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Container>

            <Row>

                {/* LIBRI */}
                <Col md={8}>

                    <Row className="g-4">

                        {filteredBooks.length > 0 ? (

                            filteredBooks.map((book) => (
                                <Col md={3} key={book.asin}>

                                    <SingleBook
                                        img={book.img}
                                        title={book.title}
                                        price={book.price}
                                        asin={book.asin}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />

                                </Col>
                            ))

                        ) : (

                            <Col className="text-center">
                                <Alert variant="danger">
                                    Nessun libro trovato per "{search}" 😢
                                </Alert>
                            </Col>

                        )}

                    </Row>

                </Col>

                {/* COMMENTI */}
                <Col md={4}>
                    <CommentArea selected={selected} />
                </Col>

            </Row>

        </Container>
    )
}

export default AllTheBooks
