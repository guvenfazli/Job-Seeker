import classes from "./tags.module.css"
/* H O O K S */

import { Link } from "react-router-dom";

export default function Tags({ tags, jobs }) {

  const formatTag = tags.replaceAll(" ", "%20")
  
  return (
    <Link target="_blank" to={`${formatTag}`}>
      <button className={classes.tag}>
        <p>{tags}</p>
        <span className={classes.job}>{jobs}</span>
      </button>
    </Link>
  )
}