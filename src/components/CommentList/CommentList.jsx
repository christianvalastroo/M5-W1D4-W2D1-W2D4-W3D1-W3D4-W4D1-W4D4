import SingleComment from "../SingleComment/SingleComment"

const CommentsList = ({ comments }) => {
    return (
        <div>
            {comments.map((c) => (
                <SingleComment key={c._id} comment={c} />
            ))}
        </div>
    )
}

export default CommentsList