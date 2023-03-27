import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faShareNodes, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { tuitLikeToggle } from "./tuits-reducer";
import { useDispatch } from "react-redux"; 


const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const tuitLikeToggleHandler = () => {
    dispatch(tuitLikeToggle(tuit))
  }

  return (
    <div className="d-flex justify-content-between">
      <div>
        <FontAwesomeIcon icon={faComment} fixedWidth /> {tuit.replies}
      </div>
      <div>
        <FontAwesomeIcon icon={faRetweet} fixedWidth /> {tuit.retuits}
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