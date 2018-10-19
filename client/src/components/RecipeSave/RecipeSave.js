import React from "react";

import { ListItem } from "../List";

const RecipeSave = ({ title, source_url, recipes, _id,  handleClick, buttonText, saved }) => (
  <ListItem>
    <h3>
      <em id="titleWord">{title}</em>{" "}
      <span className="btn-group pull-right">
        <a
          value={title}
          // onClick={() => handleClick(title)}
          className="btn btn-light"
          href={source_url}
          rel="noopener noreferrer"
          target="_blank"
          id="href"
        >
          View Recipe
        </a>
       
      </span>
    </h3>
   
  </ListItem>
);

export default RecipeSave;