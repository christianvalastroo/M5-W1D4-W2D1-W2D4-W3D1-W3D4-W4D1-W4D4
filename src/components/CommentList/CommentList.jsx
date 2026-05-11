import SingleComment from "../SingleComment/SingleComment"
import "./CommentList.css"

const CommentsList = ({ comments, refreshComments }) => {
    return (
        <div className="comment-list">
            {/* Se non ci sono commenti, mostro un messaggio al posto della lista. */}
            {comments.length === 0 ? (
                <p>Nessuna recensione per questo libro.</p>
            ) : (
                // Creo un componente per ogni recensione ricevuta dall'API.
                comments.map((c) => (
                    <SingleComment
                        key={c._id}
                        comment={c}
                        refreshComments={refreshComments}
                    />
                ))
            )}
        </div>
    )
}
export default CommentsList
