import classes from "./tags.module.css"

export default function Tags({ tags, jobs }) {
  return (
    <button className={classes.tag}>
      <p>
        {tags}

      </p>
      <span className={classes.job}>{jobs}</span>
    </button>
  )
}