import { Container, Row, Col } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"
import SingleBook from "../SingleBook/SingleBook"
import { useState } from "react"
import Alert from 'react-bootstrap/Alert';

const AllTheBooks = () => {

    const [search, setSearch] = useState("")

    const filteredBooks = fantasy.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Container>

            <input
                type="text"
                placeholder="Cerca libro"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control my-4"
            />

            <Row className="g-4">

                {filteredBooks.length > 0 ? (

                    filteredBooks.map((book) => (
                        <Col md={3} key={book.asin}>
                            <SingleBook
                                img={book.img}
                                title={book.title}
                                price={book.price}
                                asin={book.asin}
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

        </Container>
    )
}

export default AllTheBooks