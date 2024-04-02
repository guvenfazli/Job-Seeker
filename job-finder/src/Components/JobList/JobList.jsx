import classes from "./joblist.module.css"
import Job from "./Job/Job"
export default function JobList({ data, searchParam }) {


  return (
    <section className={classes.jobListSection}>
      <div className={classes.titleContainer}>
        <p className={classes.title}>Job results for `{searchParam.jobName}`</p>
      </div>
      <div className={classes.jobList}>
        {data.data.map((job) => <Job key={job.job_id} job={job} />)}
      </div>
    </section>
  )
}