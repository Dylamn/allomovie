import React, { Component } from 'react'
import PropTypes from "prop-types";

import Style from './MovieElement.module.scss'

class MovieElement extends Component {
  render () {
    const movie = this.props.movie
    const buttonStyle = "rounded px-3 py-2 text-white"

    return (
      <div onClick={this.props.updateSelectedMovie}
           className={`${Style.container} flex flex-auto flex-row bg-gray-100 cursor-pointer`}>
        <img width="150" height="200px" src={movie.img} alt={`${movie.title} Poster`} />
        <div className="flex-auto flex flex-col p-3">
          <h5 className="font-bold">
            {movie.title}
          </h5>
          <hr className="w-full" />
          <p className="flex-1 py-2 word-break">{movie.details}</p>
          <div className="flex flex-row justify-end">
            {this.props.isFavorite ? (
              <button onClick={() => this.props.tryRemoveFavorite(movie)} className={`${buttonStyle} bg-red-600`}>
                Remove
              </button>
            ) : (
              <button onClick={() => this.props.tryAddFavorite(movie)} className={`${buttonStyle} bg-blue-600`}>
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

MovieElement.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    details: PropTypes.string,
  }),
  updateSelectedMovie: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  tryAddFavorite: PropTypes.func.isRequired,
  tryRemoveFavorite: PropTypes.func.isRequired,
}

export default MovieElement
