
const NotFound = () => {
    return (
        <div className="error-contaniner">
            <div className="error-content">
                <h1 className="error-title">404</h1>
                <h3 className="error-notfound">Not Found</h3>
                <p className="error-decription">The resource requested could not be found on the server</p>
                <button className="error-button">
                    Back
                </button>
            </div>
        </div>
    )
}

export default NotFound;