import React from "react";
import PropTypes from "prop-types";

import FavoriteElement from "./favorite-element/FavoriteElement";

const FavoriteList = ({favorites, tryRemoveFavorite}) => (
  <main className="w-full flex flex-row flex-wrap justify-center">
    {favorites.map((favorite, i) => (
      <FavoriteElement key={i} favorite={favorite} tryRemoveFavorite={tryRemoveFavorite} />
    ))}
  </main>
);

FavoriteList.propTypes = {
  favorites: PropTypes.array,
  tryRemoveFavorite: PropTypes.func.isRequired,
}

export default FavoriteList
