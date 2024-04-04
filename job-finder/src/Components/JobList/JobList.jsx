import classes from "./joblist.module.css"

/* H O O K S */
import { useState } from "react"

/* C O M P O N E N T S */
import Job from "./Job/Job"

export default function JobList({ data, searchParam }) {

  const [showMore, setShowMore] = useState({
    start: 0,
    end: 5
  })

  const limitedJobs = data.data.slice(showMore.start, showMore.end)

  function showMoreJobs() {
    if (showMore.end <= limitedJobs.length) {
      setShowMore((prev) => {
        let newLimit = { ...prev }
        newLimit.end += 5
        return newLimit
      })
    }
  }

  return (
    <section className={classes.jobListSection}>
      <div className={classes.titleContainer}>
        <p className={classes.title}>{searchParam.jobName === "undefined" ? "Recommended Jobs" : `Job results for ${searchParam.jobName}`}</p>
      </div>
      <div className={classes.jobList}>
        {limitedJobs.map((job) => <Job key={job.job_id} job={job} />)}
      </div>
      <div className={classes.jobListNav}>
        <button disabled={showMore.end >= data.data.length} onClick={() => showMoreJobs()}>Show More</button>
      </div>
    </section>
  )
}