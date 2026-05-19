import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "./AddComment.css"

const AddComment = ({ selected, refreshComments }) => {
    const [newComment, setNewComment] = useState({
        comment: "",
        rate: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        // L'API richiede elementId per collegare la recensione al libro selezionato.
        const commentToSend = {
            ...newComment,
            elementId: selected
        }

        fetch("https://striveschool-api.herokuapp.com/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA3MGU3ZGQ2M2FhMTAwMTUxM2RlNzEiLCJpYXQiOjE3Nzg4NDczNTcsImV4cCI6MTc4MDA1Njk1N30.q7xJjkjhZlwSD75rGPKC3vsd8FftiLrT_jvuascRslA`
            },
            body: JSON.stringify(commentToSend)
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Token non valido o scaduto")
                }
                return res.json()
            })
            .then((data) => {
                console.log("Commento salvato:", data)
                // Dopo il salvataggio ricarico la lista e svuoto il form.
                refreshComments()
                setNewComment({
                    comment: "",
                    rate: 0
                })
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <Form className="mt-3 d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                placeholder="Scrivi una recensione"
                value={newComment.comment}
                onChange={(e) =>
                    setNewComment({
                        ...newComment,
                        comment: e.target.value
                    })
                }
            />

            <div className="stars-wrapper">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        className="star"
                        key={star}
                        style={{
                            cursor: "pointer",
                            fontSize: "24px"
                        }}
                        onClick={() =>
                            setNewComment({
                                ...newComment,
                                rate: star
                            })
                        }
                    >
                        {star <= newComment.rate ? "⭐" : "☆"}
                    </span>
                ))}
            </div>

            <Button variant="primary" type="submit">
                Invia
            </Button>
        </Form>
    )
}

export default AddComment
