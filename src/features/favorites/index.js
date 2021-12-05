import React from "react";
import { FavoriteList } from "./components";
import PropTypes from "prop-types";
import { Loader } from "../../components/utils";

const Favorites = (props) => (
  <div className="flex flex-1 pt-4">
    {props.loaded ? (
      <FavoriteList
        favorites={props.favorites}
        removeFavorite={props.removeFavorite}
      />
    ) : (
      <Loader />
    )}
  </div>
)

Favorites.propTypes = {
  loaded: PropTypes.bool,
  favorites: PropTypes.array.isRequired,
  removeFavorite: PropTypes.func.isRequired,
}
export default Favorites

