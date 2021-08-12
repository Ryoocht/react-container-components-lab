import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState({
            searchTerms: e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault;
        fetch(URL + `query=${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`)
            .then(res => res.json())
            .then(data => this.setState({ reviews: data.results }))
    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleChange} type="text" value={this.state.searchTerms}></input>
                    <button >Search</button>
                </form>
                <div>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer