import React from "react";
// import formatDate from "../../utils/formatDate";
import { ListItem } from "../List";

const Recipe = ({ title, source_url, recipes, _id,  handleClick, buttonText, saved }) => (
  <ListItem>
    <h3>
      <em>{title}</em>{" "}
      <span className="btn-group pull-right">
        <a
          value={title}
          onClick={() => handleClick(title)}
          className="btn btn-light"
          href={source_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Recipe
        </a>
        <button onClick={() => handleClick(title)} className="btn btn-primary">Save this
          {buttonText}
        </button>
      </span>
    </h3>
   
  </ListItem>
);

export default Recipe;