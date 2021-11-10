import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearchInput = e => this.setState({searchTerm: e.target.value})

    handleSubmit = e => {e.preventDefault()
    
        fetch(URL.concat(this.state.searchTerm))
        .then(r=>r.json())
        .then(data=>this.setState({reviews: res.results}))
    }


    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input id="search-input" type="text" style={{width: 275}} onChange={this.handleSearchInput}/>
                    <button type="submit">submit</button>
                </form>
                {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h3>Search Results:</h3>}
                <MovieReviews reviews={this.state.reviews}/>

            </div>
        )
    }
}
export default SearchableMovieReviewsContainer