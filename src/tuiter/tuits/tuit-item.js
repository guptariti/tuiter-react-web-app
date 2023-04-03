import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return (
    <li className="list-group-item">
      <div className="d-flex align-items-start justify-content-start">
        <div className="col-2">
          <img width={48} height={48} className="rounded-circle" src={`../${tuit.image}`} alt="tuit" />
        </div>
        <div className="col-10">
          <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
          <b>{tuit.userName}</b> <FontAwesomeIcon icon={faCircleCheck} fixedWidth className="text-primary" /> {tuit.handle} &#183; {tuit.time}<br/>
          {tuit.tuit}
          <TuitStats key={tuit._id} tuit={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;