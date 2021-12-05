import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Style from './MovieDetails.module.scss'

class MovieDetails extends Component {
  render () {
    return (
      <section className="hidden md:block sm:w-1/4 bg-gray-100 flex flex-col p-4 mr-2">
        <h5 className="font-bold">{this.props.title}</h5>
        <hr className="w-full" />
        <div className="py-3">
          <img src={this.props.img} alt={`${this.props.title} Poster`}
               className={`${Style['img-container']} mx-auto`} />
        </div>
        <hr className="w-full" />
        <p className="text-gray-500 text-center">{this.props.details}</p>
        <hr className="w-full" />
        <p className="">{this.props.description}</p>
      </section>
    );
  }
}

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  details: PropTypes.string,
  description: PropTypes.string,
}

export default MovieDetails
