import React, { Component } from 'react'
import PropTypes from "prop-types";

import Style from './MovieElement.module.scss'

class MovieElement extends Component {
  render () {
    return (
      <div onClick={this.props.updateSelectedMovie}
           className={`${Style.container} flex flex-row bg-gray-100 cursor-pointer`}>
        <img width="150" height="200px" src={this.props.img} alt={`${this.props.title} Poster`} />
        <div className="flex-auto flex flex-col p-3">
          <h5 className="font-bold">
            {this.props.title}
          </h5>
          <hr className="w-full" />
          <span className="py-2">{this.props.details}</span>
        </div>
      </div>
    );
  }
}

MovieElement.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  details: PropTypes.string,
  updateSelectedMovie: PropTypes.func.isRequired
}

export default MovieElement
