import React, { Component } from 'react'

class MovieDetails extends Component {
  render () {
    return (
      <section className="hidden sm:block sm:w-1/4 border flex flex-col p-4 mr-2">
        <h5>{this.props.movie.title}</h5>
        <hr className="w-full" />
        <div className="py-3">
          <img src={this.props.movie.img} alt="" className="block mx-auto" />
        </div>
        <hr className="w-full" />
        <p className="text-gray-500 text-center">{this.props.movie.details}</p>
        <hr className="w-full" />
        <p className="">{this.props.movie.description}</p>
      </section>
    );
  }
}

export default MovieDetails
