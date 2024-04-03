import classes from "./job.module.css"
import { calculateDate } from "../../../Utils/fetchData"
import noCompany from "../../../Assets/JobListAssets/None.png"
import { Link } from "react-router-dom"
export default function Job({ job }) {

  const postedDaysAgo = calculateDate(job.job_posted_at_datetime_utc)
  const companyImage = job.employer_logo

  

  return (
    <div className={classes.job}>
    <div className={classes.jobLeft}>
      <div className={classes.jobImg} style={{ backgroundImage: `url(${companyImage ? companyImage : noCompany})` }} />



      <div className={classes.jobDetails}>
        <p style={{ marginTop: "0px", fontWeight: "bold", }}>{job.job_title}</p>
        <p>{job.employer_name}</p>
        <p style={{ color: "gray" }}>{job.job_city} {job.job_city && ","} {job.job_country}</p>
        <p style={{ color: "gray" }}>{job.job_is_remote ? "Remote" : "On-Site"}</p>
        <p style={{ marginBottom: "0px", fontSize: "12px" }}>{postedDaysAgo === 0 ? "Recently posted" : `Posted ${postedDaysAgo} days ago`}</p>
      </div>
    </div>

    <div className={classes.jobRight}>

      <Link to={job.job_apply_link}>Apply</Link>


    </div>

  </div>
  )
}