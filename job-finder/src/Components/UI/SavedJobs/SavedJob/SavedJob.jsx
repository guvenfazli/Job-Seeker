import classes from "./savedjob.module.css"

/* H O O K S */
import { Link } from "react-router-dom"

export default function SavedJob({ job }) {
  return (
    <div className={classes.savedJob}>
      <div className={classes.jobInfo}>
        <p>{job.job_title}</p>
        <p>{job.employer_name}</p>
        <p>{job.job_city}</p>
      </div>

      <Link target="_blank" to={job.job_apply_link}><button>Apply!</button></Link>
    </div>
  )
}