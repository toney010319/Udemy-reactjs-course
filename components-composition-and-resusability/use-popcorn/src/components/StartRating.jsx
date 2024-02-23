/* eslint-disable react/prop-types */

import { useState } from "react"
import Star from "./Star"


const StartRating = ({ maxRating = 5 }) => {
    const [rating, setRating] = useState(0)
    const [tempRating, setTempRating] = useState(0)
    const containerStyle = {
        display: "flex",
        alignItems: 'center',
        gap: "16px"
    }
    const starContainerStyle = {
        display: "flex",
        gap: "4px"
    }

    const textStyle = {
        lineHeight: "1",
        margin: "0",
    }
    const handleRating = (rating) => {
        setRating(rating)
    }
    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star
                        key={i}
                        onRate={() => handleRating(i + 1)}
                        full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                        onHoverIn={() => setTempRating(i + 1)}
                        onHoverOut={() => setTempRating(0)}
                    />
                ))}
            </div>
            <p style={textStyle}>{tempRating || rating || ''}</p>
        </div>
    )
}

export default StartRating