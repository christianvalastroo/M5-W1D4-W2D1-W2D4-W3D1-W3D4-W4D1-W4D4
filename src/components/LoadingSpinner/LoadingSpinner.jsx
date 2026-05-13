import Spinner from "react-bootstrap/Spinner"

const LoadingSpinner = () => {
    return (
        <div className="text-center p-3">
            <Spinner animation="border" role="status" />

            <p className="mt-2 fw-bold">
                Caricamento...
            </p>
        </div>
    )
}

export default LoadingSpinner
