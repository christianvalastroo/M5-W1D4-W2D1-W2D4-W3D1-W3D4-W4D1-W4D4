

const SingleComment = ({ comment }) => {
    return (
        <div>
            <p>{comment.comment}</p>
            <p>⭐ {comment.rate}</p>
        </div>
    )
}

export default SingleComment
