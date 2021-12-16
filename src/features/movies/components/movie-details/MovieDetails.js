import React from 'react'
import PropTypes from 'prop-types'

import Style from './MovieDetails.module.scss'

const MovieDetails = (props) => {
  const {movie} = props

  return (
    <section className="hidden md:block sm:w-1/4 bg-gray-100 flex flex-col p-4 mr-2">
      <h5 className="font-bold">{movie.title}</h5>
      <hr className="w-full" />
      <div className="py-3">
        <img src={movie.img} alt={`${movie.title} Poster`}
             className={`${Style['img-container']} mx-auto`} />
      </div>
      <hr className="w-full" />
      <p className="text-gray-500 text-center">{movie.details}</p>
      <hr className="w-full" />
      <p className="">{movie.description}</p>
    </section>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    details: PropTypes.string,
    description: PropTypes.string,
  })
}

export default MovieDetails
