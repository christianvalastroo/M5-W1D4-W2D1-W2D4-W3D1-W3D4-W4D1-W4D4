import { useEffect, useState } from "react"
import CommentsList from "../CommentList/CommentList"
import AddComment from "../AddComment/AddComment"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import "./CommentArea.css"

const CommentArea = ({ selected }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchComments = () => {
        if (!selected) return

        setIsLoading(true)

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${selected}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ3ZWEyYzg5ODA5OTAwMTU1M2FlZWUiLCJpYXQiOjE3NzU3NTc4NzYsImV4cCI6MTc3Njk2NzQ3Nn0.WL9K39iwryMdnCmRKEEv7xT9vPsUHA0cv7j0LAo1MHg`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setComments(data)
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchComments()
    }, [selected])

    return (
        <div className="comment-area">
            <h5>Recensioni del libro</h5>

            {!selected ? (
                <p>Seleziona un libro per vedere le recensioni</p>
            ) : isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <CommentsList
                        comments={comments}
                        refreshComments={fetchComments}
                    />

                    <AddComment
                        selected={selected}
                        refreshComments={fetchComments}
                    />
                </>
            )}
        </div>
    )
}

export default CommentArea
