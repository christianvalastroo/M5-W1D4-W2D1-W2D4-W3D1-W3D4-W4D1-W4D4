import { useState } from "react"

const AddComment = ({ asin }) => {
    const [newComment, setNewComment] = useState({
        comment: "",
        rate: 0, // 🔥 importante
        elementId: asin
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("https://striveschool-api.herokuapp.com/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ3ZWEyYzg5ODA5OTAwMTU1M2FlZWUiLCJpYXQiOjE3NzU3NTc4NzYsImV4cCI6MTc3Njk2NzQ3Nn0.WL9K39iwryMdnCmRKEEv7xT9vPsUHA0cv7j0LAo1MHg`
            },
            body: JSON.stringify(newComment)
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Token non valido o scaduto")
                }
                return res.json()
            })
            .then((data) => {
                console.log("Commento salvato:", data)
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
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

            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
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

            <button type="submit">Invia</button>
        </form>
    )
}

export default AddComment
