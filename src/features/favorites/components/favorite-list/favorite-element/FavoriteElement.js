import React from 'react'
import PropTypes from "prop-types";

import Style from './FavoriteElement.module.scss'

const FavoriteElement = ({favorite: {title, img, details}, removeFavorite}) => {
  return (
    <div className={`${Style.container} w-full flex flex-auto flex-row bg-gray-100`}>
      <img width="150" height="200px" src={img} alt={`${title} Poster`} />
      <div className="flex-auto flex flex-col p-3">
        <h5 className="font-bold">
          {title}
        </h5>
        <hr className="w-full" />
        <p className="flex-1 py-2 word-break">
          {details}
        </p>
        <div className="flex flex-row justify-end">
          <button onClick={() => removeFavorite(title)} className="rounded px-3 py-2 text-white bg-red-600">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

FavoriteElement.propTypes = {
  favorite: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    details: PropTypes.string,
    description: PropTypes.string,
  }),
  removeFavorite: PropTypes.func.isRequired
}

export default FavoriteElement
