import React, { Component } from 'react'

class MovieElement extends Component {
  handleClick = () => {
    this.props.updateSelectedMovie(this.props.id)
  }

  render () {
    return (
      <div className="w-full lg:w-1/2 p-2">
        <div className="border flex">
          <img width="150" height="200px" src={this.props.movie.img} alt={`${this.props.movie.title} Poster`}
               onClick={this.handleClick} className="cursor-pointer" />
          <div className="flex-auto flex flex-col p-3">
            <h5 onClick={this.handleClick} className="cursor-pointer">
              {this.props.movie.title}
            </h5>
            <hr className="w-full" />
            <span className="py-2">{this.props.movie.details}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieElement
