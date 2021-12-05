import React from "react";
import PropTypes from "prop-types";

import FavoriteElement from "./favorite-element/FavoriteElement";

const FavoriteList = ({favorites, removeFavorite}) => (
  <main className="w-full flex flex-row flex-wrap justify-center">
    {favorites.map((favorite, i) => (
      <FavoriteElement key={i} favorite={favorite} removeFavorite={removeFavorite} />
    ))}
  </main>
);

FavoriteList.propTypes = {
  favorites: PropTypes.array,
  removeFavorite: PropTypes.func.isRequired,
}

export default FavoriteList
