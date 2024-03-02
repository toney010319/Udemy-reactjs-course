/* eslint-disable react/prop-types */
import { useState } from 'react'

const TabContent = ({ item }) => {
    const [showDetails, setShowDetails] = useState(true);
    const [likes, setLikes] = useState(0);

    function handleInc() {
        setLikes(likes + 1);
    }

    const handleUndo = () => {
        setShowDetails(true);
        setLikes(0);

    }
    function handleTrippleInc() {
        setLikes(likes + 3);
    }
    const handleUndoLater = () => {
        setTimeout(handleUndo, 2000)
    }

    return (
        <div className="tab-content">
            <h4>{item.summary}</h4>
            {showDetails && <p>{item.details}</p>}

            <div className="tab-actions">
                <button onClick={() => setShowDetails((h) => !h)}>
                    {showDetails ? "Hide" : "Show"} details
                </button>

                <div className="hearts-counter">
                    <span>{likes} ❤️</span>
                    <button onClick={handleInc}>+</button>
                    <button onClick={handleTrippleInc}>+++</button>
                </div>
            </div>

            <div className="tab-undo">
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleUndoLater}>Undo in 2s</button>
            </div>
        </div>
    );
}

export default TabContent