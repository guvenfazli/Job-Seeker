import classes from "./savedjob.module.css"

export default function SavedJob({job}) {
  return (
    <div className={classes.savedJob}>
      <div className={classes.jobInfo}>
        <p>{job.job_title}</p>
        <p>{job.employer_name}</p>
        <p>{job.job_city}</p>
      </div>

      <button>Apply!</button>
    </div>
  )
}