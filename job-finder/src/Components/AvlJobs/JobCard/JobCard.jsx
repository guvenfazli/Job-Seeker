import { Link } from "react-router-dom"
import { calculateDate } from "../../../Utils/fetchData"
import classes from "./jobcard.module.css"
import calendar from "../../../Assets/JobCardAssets/Calendar.png"
import noCompany from "../../../Assets/JobListAssets/None.png"


export default function JobCard({ job }) {

  const postedDaysAgo = calculateDate(job.job_posted_at_datetime_utc)
  const companyImage = job.employer_logo
  console.log(job)

  return (
    <div className={classes.card}>
      <div className={classes.companyInfo}>
        <div className={classes.primaryInfo}>
          <div className={classes.companyImg} style={{backgroundImage: `url(${companyImage ? companyImage : noCompany})`}} />
          
          <div className={classes.companyTitle}>
            <p>{job.employer_name}</p>
            <p>{job.job_city} {job.job_city && ","} {job.job_country}</p>
          </div>
        </div>

        <button>Save</button>
      </div>

      <div className={classes.jobInfo}>
        <p>{job.job_title}</p>
        <p style={{ color: "black", fontSize: "12px", marginBottom: "20px" }}>{job.job_employment_type}</p>
      </div>

      <div className={classes.applyJob}>
        <div className={classes.jobTime}>
          <img src={calendar} />
          <p>{postedDaysAgo} Days Ago</p>
        </div>

        <Link target="_blank" to={`${job.job_apply_link}`}><button className={classes.applyNow}>Apply Now</button></Link>
      </div>


    </div>
  )
}