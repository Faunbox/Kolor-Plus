import React from "react";
import "../Styles/MainOffert.css";
import { faCheck as znaczek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LiMainCont = (props) => {
  return (
    <li className="MainOffert">
      <FontAwesomeIcon icon={znaczek} />
      {props.name}
    </li>
  );
};

export default LiMainCont;
