import { useEffect, useState } from "react"
import CommentsList from "../CommentList/CommentList"
import AddComment from "../AddComment/AddComment"
import "./CommentArea.css"

const CommentArea = ({ asin }) => {

    const [comments, setComments] = useState([])

    const fetchComments = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
            headers: {
                Authorization: ``
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setComments(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchComments()
    }, [asin])

    return (
        <div className="comment-area">
            <h5>Recensioni del libro</h5>

            <CommentsList comments={comments} refreshComments={fetchComments} />

            <AddComment asin={asin} />
            
        </div>
    )
}

export default CommentArea
