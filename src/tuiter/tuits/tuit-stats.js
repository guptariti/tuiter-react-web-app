import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHeart as faHeartRegular,
  faThumbsDown as faThumbsDownRegular
} from '@fortawesome/free-regular-svg-icons';
import {
  faRetweet,
  faShareNodes,
  faHeart as faHeartSolid,
  faThumbsDown as faThumbsDownSolid,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {updateTuitThunk}
  from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const tuitsDislikeToggleHandler = () => {
    const currentlyDisliked = tuit.disliked;
    if (currentlyDisliked) {
      dispatch(
        updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes - 1,
          disliked: !currentlyDisliked
        })
      )
    } else {
      dispatch(
        updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes + 1,
          disliked: !currentlyDisliked
        })
      )
    }
    
  };
  const tuitLikeToggleHandler = () => {
    const currentlyliked = tuit.liked;
    if (currentlyliked) {
      dispatch(
        updateTuitThunk({
          ...tuit,
          likes: tuit.likes - 1,
          liked: !currentlyliked
        })
      )
    } else {
      dispatch(
        updateTuitThunk({
          ...tuit,
          likes: tuit.likes + 1,
          liked: !currentlyliked
        })
      )
    }
    
  };

  return (
    <div className="d-flex justify-content-between">
      <div>
        <FontAwesomeIcon icon={faComment} fixedWidth /> {tuit.replies}
      </div>
      <div>
        <FontAwesomeIcon icon={faRetweet} fixedWidth /> {tuit.retuits}
      </div>
      <div>
        <FontAwesomeIcon icon={tuit.disliked ? faThumbsDownSolid : faThumbsDownRegular} fixedWidth  role="button" onClick={tuitsDislikeToggleHandler} /> {tuit.dislikes}
      </div>
      <div>
        <FontAwesomeIcon icon={tuit.liked ? faHeartSolid : faHeartRegular} fixedWidth 
        className={tuit.liked ? "text-danger" : ""} onClick={tuitLikeToggleHandler} role="button" />
        {tuit.likes}
      </div>
      <div>
        <FontAwesomeIcon icon={faShareNodes} fixedWidth />
      </div>
    </div>
  );
};

export default TuitStats;
