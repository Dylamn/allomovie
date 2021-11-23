import React, { Component } from 'react'

class MovieElement extends Component {
  render () {
    return (
      <div className="w-full lg:w-1/2 p-2">
        <div className="border flex">
          <img width="150" height="200px" src="https://via.placeholder.com/150x200" alt="film poster" />
          <div className="flex-auto flex flex-col p-3">
            <h5>Title</h5>
            <hr className="w-full" />
            <p> {/* TODO: Try the `line-clamp` plugin */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Autem dolores earum explicabo laudantium, nemo obcaecati quaerat quas totam vero! Architecto dignissimos,
              iste nobis numquam officia provident sit suscipit! Dolores, iusto?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieElement
