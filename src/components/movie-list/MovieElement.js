import React, { Component } from 'react'

class MovieElement extends Component {
  render () {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img src="https://via.placeholder.com/200"
               alt="film poster" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">GLADIATOR</h5>
            <p className="card-text">
              The Roman general Maximus was the most loyal supporter of the emperor Marcus Aurelius,
              whom he led from victory to victory with exemplary bravery and dedication.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieElement
