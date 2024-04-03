import classes from "./loading.module.css"

export default function Loading() {
  return (
    <div className={classes.loadingHome}>
      <span className={classes.loader}></span>
    </div>

  )
}