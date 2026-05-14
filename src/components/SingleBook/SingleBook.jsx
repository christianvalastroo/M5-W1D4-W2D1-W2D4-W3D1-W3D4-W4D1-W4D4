import { useContext } from "react"
import Card from "react-bootstrap/Card"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"
import "./SingleBook.css"

import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

const SingleBook = (props) => {
    const { theme } = useContext(ThemeHome)

    return (
        <>

            <Card
                className={`book-card h-100 w-100 d-flex flex-column ${props.selected === props.asin ? "selected" : ""} ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
                onClick={() => props.setSelected(props.asin)}
            >

                <Card.Img
                    className="book-img"
                    variant="top"
                    src={props.img}
                />

                <Card.Body className="d-flex flex-column flex-grow-1 gap-2">
                    <Card.Title className="book-title" title={props.title}>
                        {props.title}
                    </Card.Title>

                    <Card.Text className="mt-auto mb-0 fw-bold text-success">
                        {props.price} €
                    </Card.Text>
                </Card.Body>

                <Button
                    as={Link}
                    to={`/book/${props.asin}`}
                    variant="primary"
                    size="sm"
                >
                    Dettaglio
                </Button>

            </Card>

        </>
    )
}

export default SingleBook
