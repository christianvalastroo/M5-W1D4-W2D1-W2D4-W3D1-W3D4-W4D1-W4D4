import { Component } from "react"
import CommentsList from "../CommentList/CommentList"
import AddComment from "../AddComment/AddComment"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import { ThemeHome } from "../../context/ThemeHome/ThemeHome"
import "./CommentArea.css"

class CommentArea extends Component {
    static contextType = ThemeHome

    // Mantiene la lista dei commenti e lo stato di caricamento.
    state = {
        comments: [],
        isLoading: false
    }

    // Recupera i commenti del libro selezionato.
    fetchComments = () => {
        if (!this.props.selected) return

        this.setState({ isLoading: true })

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.selected}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTVhZWJhMGYxMjAwMTUyZTc3NmUiLCJpYXQiOjE3Nzc1NzIzNzAsImV4cCI6MTc3ODc4MTk3MH0.dy6gGBLPrFz2TNWeWwcIWhVvTauLyAHGaKmx8kCrh-c`
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
        // Quando cambia il libro selezionato, ricarica le recensioni.
        if (prevProps.selected !== this.props.selected) {
            this.fetchComments()
        }
    }

    render() {
        const { theme } = this.context

        return (
            <div className={`comment-area mt-3 p-3 rounded border ${theme === "dark" ? "comment-area-dark" : "bg-light text-dark"}`}>
                <h5 className="fw-bold mb-3">Recensioni del libro</h5>

                {/* Mostra un messaggio, il loader oppure la lista dei commenti. */}
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
