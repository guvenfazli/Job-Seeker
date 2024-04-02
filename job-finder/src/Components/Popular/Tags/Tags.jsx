import classes from "./tags.module.css"
import { Link } from "react-router-dom";

export default function Tags({ tags, jobs }) {

  const formatTag = tags.replaceAll(" ", "%20")
  console.log(formatTag)
  return (
    <Link to={formatTag}>
      <button className={classes.tag}>
        <p>{tags}</p>
        <span className={classes.job}>{jobs}</span>
      </button>
    </Link>
  )
}