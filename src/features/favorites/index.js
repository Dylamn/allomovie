import React from "react";
import { FavoriteList } from "./components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Loader } from "../../components/utils";
import { favoritesIsLoadingSelector, favoritesListSelector } from "../../store/selectors";
import { tryRemoveFavorite } from "../../store/actions";

const Favorites = (props) => (
  <div className="flex flex-1 pt-4">
    {props.isLoading ? (
      <Loader />
    ) : (
      <FavoriteList
        favorites={props.favorites}
        tryRemoveFavorite={props.tryRemoveFavorite}
      />
    )}
  </div>
)

Favorites.propTypes = {
  isLoading: PropTypes.bool,
  favorites: PropTypes.array.isRequired,
  tryMemoveFavorite: PropTypes.func.isRequired,
}

export default connect(state => ({
  favorites: favoritesListSelector(state),
  isLoading: favoritesIsLoadingSelector(state),
}), {
  tryRemoveFavorite
})(Favorites)

