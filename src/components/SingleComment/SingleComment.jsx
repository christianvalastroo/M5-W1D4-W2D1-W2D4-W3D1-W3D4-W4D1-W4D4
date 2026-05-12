import { useContext, useState } from "react"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"
import "./SingleComment.css"

const SingleComment = ({ comment, refreshComments }) => {
    const { theme } = useContext(ThemeHome)
    const [isEditing, setIsEditing] = useState(false)
    const [editedComment, setEditedComment] = useState({
        comment: comment.comment,
        rate: comment.rate
    })

    // Elimina il commento e poi aggiorna la lista.
    const deleteComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTVhZWJhMGYxMjAwMTUyZTc3NmUiLCJpYXQiOjE3Nzc1NzIzNzAsImV4cCI6MTc3ODc4MTk3MH0.dy6gGBLPrFz2TNWeWwcIWhVvTauLyAHGaKmx8kCrh-c`
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Errore eliminazione commento")
                }
                refreshComments()
            })
            .catch((err) => console.log(err.message))
    }

    // Modifica il commento e poi aggiorna la lista.
    const updateComment = (e) => {
        e.preventDefault()

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTVhZWJhMGYxMjAwMTUyZTc3NmUiLCJpYXQiOjE3Nzc1NzIzNzAsImV4cCI6MTc3ODc4MTk3MH0.dy6gGBLPrFz2TNWeWwcIWhVvTauLyAHGaKmx8kCrh-c`
            },
            body: JSON.stringify({
                ...editedComment,
                elementId: comment.elementId
            })
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Errore modifica commento")
                }
                setIsEditing(false)
                refreshComments()
            })
            .catch((err) => console.log(err.message))
    }

    const cancelEdit = () => {
        setEditedComment({
            comment: comment.comment,
            rate: comment.rate
        })
        setIsEditing(false)
    }

    return (
        <div className={`single-comment ${theme === "dark" ? "single-comment-dark" : "single-comment-light"}`}>
            {isEditing ? (
                <form className="edit-comment-form" onSubmit={updateComment}>
                    <input
                        className="edit-comment-input"
                        type="text"
                        value={editedComment.comment}
                        onChange={(e) =>
                            setEditedComment({
                                ...editedComment,
                                comment: e.target.value
                            })
                        }
                    />

                    <select
                        className="edit-comment-select"
                        value={editedComment.rate}
                        onChange={(e) =>
                            setEditedComment({
                                ...editedComment,
                                rate: Number(e.target.value)
                            })
                        }
                    >
                        <option value="1">1 stella</option>
                        <option value="2">2 stelle</option>
                        <option value="3">3 stelle</option>
                        <option value="4">4 stelle</option>
                        <option value="5">5 stelle</option>
                    </select>

                    <div className="comment-actions">
                        <button className="save-comment-btn" type="submit">
                            Salva
                        </button>

                        <button
                            className="cancel-comment-btn"
                            type="button"
                            onClick={cancelEdit}
                        >
                            Annulla
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <p className="comment-text">{comment.comment}</p>
                    <p className="comment-rate">⭐ {comment.rate}</p>

                    <div className="comment-actions">
                        <button
                            className="edit-comment-btn"
                            onClick={() => setIsEditing(true)}
                        >
                            Modifica
                        </button>

                        <button className="delete-comment-btn" onClick={deleteComment}>
                            Elimina
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default SingleComment
