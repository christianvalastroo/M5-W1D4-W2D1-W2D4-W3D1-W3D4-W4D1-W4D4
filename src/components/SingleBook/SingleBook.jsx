import { useContext } from "react"
import Card from "react-bootstrap/Card"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"
import "./SingleBook.css"

const SingleBook = (props) => {
    const { theme } = useContext(ThemeHome)

    return (
        <>

            <Card
                className={`book-card ${props.selected === props.asin ? "selected" : ""} ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
                onClick={() => props.setSelected(props.asin)}
            >

                <Card.Img
                    className="book-img"
                    variant="top"
                    src={props.img}
                />

                <Card.Body className="book-body">
                    <Card.Title className="book-title">
                        {props.title}
                    </Card.Title>

                    <Card.Text className="book-price">
                        {props.price} €
                    </Card.Text>
                </Card.Body>

            </Card>

        </>
    )
}

export default SingleBook
