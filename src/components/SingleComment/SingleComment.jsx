import "./SingleComment.css"

const SingleComment = ({ comment, refreshComments }) => {

    const deleteComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ3ZWEyYzg5ODA5OTAwMTU1M2FlZWUiLCJpYXQiOjE3NzU3NTc4NzYsImV4cCI6MTc3Njk2NzQ3Nn0.WL9K39iwryMdnCmRKEEv7xT9vPsUHA0cv7j0LAo1MHg`
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

    return (
        <div className="single-comment">
            <p className="comment-text">{comment.comment}</p>
            <p className="comment-rate">⭐ {comment.rate}</p>

            <button className="delete-comment-btn" onClick={deleteComment}>
                Elimina
            </button>
        </div>
    )
}

export default SingleComment