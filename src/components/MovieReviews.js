import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
            {reviews.map(review => {
                return <p className="review"> {review.byline}</p>
            })}
        </div>

    )
}

export default MovieReviews