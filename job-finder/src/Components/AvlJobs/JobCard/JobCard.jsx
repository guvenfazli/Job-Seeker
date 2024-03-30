import classes from "./jobcard.module.css"
import calendar from "../../../Assets/JobCardAssets/Calendar.png"
import dayjs from "dayjs"

export default function JobCard({ job }) {

  const dayjs = require('dayjs')
  const today = dayjs()
  const formattedToday = dayjs(today.format('MM/DD/YYYY'))
  const postedTimeStamp = job.job_posted_at_datetime_utc
  const postedDate = new Date(postedTimeStamp)
  const formattedDate = dayjs(postedDate.toLocaleDateString('en-US', { year: "numeric", month: "numeric", day: "numeric" }))
  const postedDaysAgo = formattedToday.diff(formattedDate, 'day')




  return (
    <div className={classes.card}>
      <div className={classes.companyInfo}>
        <div className={classes.primaryInfo}>
          <div className={classes.companyImg}>
            <img alt="company-logo" />
          </div>
          <div className={classes.companyTitle}>
            <p>{job.employer_name}</p>
            <p>{job.job_city}, {job.job_country}</p>
          </div>
        </div>

        <button>Save</button>
      </div>

      <div className={classes.jobInfo}>
        <p>{job.job_job_title}</p>
        <p style={{ color: "black", fontSize: "12px", marginBottom: "20px" }}>{job.job_employment_type}</p>
      </div>

      <div className={classes.applyJob}>
        <div className={classes.jobTime}>
          <img src={calendar} />
          <p>{postedDaysAgo} Days Ago</p>
        </div>

        <button className={classes.applyNow}>Apply Now</button>
      </div>


    </div>
  )
}