import Spinner from "react-bootstrap/Spinner"
import "./LoadingSpinner.css"

const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <Spinner animation="border" role="status" />

            <p className="loading-text">
                Caricamento...
            </p>
        </div>
    )
}

export default LoadingSpinner