import { useState } from 'react'
import StartRating from '../components/StartRating';

const StarRatingFlexibility = () => {
    const [movieRating, setMovieRating] = useState(0);

    return (
        <div>
            <StartRating
                color="blue"
                maxRating={10}
                onSetRating={setMovieRating}
            />
            <p>Rating: {movieRating}</p>
        </div>
    )
}

export default StarRatingFlexibility