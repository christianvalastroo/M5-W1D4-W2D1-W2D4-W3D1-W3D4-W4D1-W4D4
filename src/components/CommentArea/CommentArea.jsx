import { Component } from "react"
import CommentsList from "../CommentList/CommentList"
import AddComment from "../AddComment/AddComment"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import "./CommentArea.css"

class CommentArea extends Component {
    state = {
        comments: [],
        isLoading: false
    }

    fetchComments = () => {
        if (!this.props.selected) return

        this.setState({ isLoading: true })

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.selected}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ3ZWEyYzg5ODA5OTAwMTU1M2FlZWUiLCJpYXQiOjE3NzU3NTc4NzYsImV4cCI6MTc3Njk2NzQ3Nn0.WL9K39iwryMdnCmRKEEv7xT9vPsUHA0cv7j0LAo1MHg`
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Errore nel caricamento dei commenti")
                }
                return res.json()
            })
            .then((data) => {
                this.setState({ comments: data })
            })
            .catch((err) => console.log(err.message))
            .finally(() => {
                this.setState({ isLoading: false })
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selected !== this.props.selected) {
            this.fetchComments()
        }
    }

    render() {
        return (
            <div className="comment-area">
                <h5>Recensioni del libro</h5>

                {!this.props.selected ? (
                    <p>Seleziona un libro per vedere le recensioni</p>
                ) : this.state.isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <CommentsList
                            comments={this.state.comments}
                            refreshComments={this.fetchComments}
                        />

                        <AddComment
                            selected={this.props.selected}
                            refreshComments={this.fetchComments}
                        />
                    </>
                )}
            </div>
        )
    }
}

export default CommentArea
