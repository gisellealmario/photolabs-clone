import React, { useCallback, useState } from "react";
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';


const PhotoFavButton = (props) => {
  
  return (
    <div className="photo-list__fav-icon">
      <div
        className="photo-list__fav-icon-svg"
        onClick={() => {
          props.toggleFavourites(props.id);
        }}
      >
        <FavIcon selected={props.favPhotos.includes(props.id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
