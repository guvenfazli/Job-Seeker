import { Link } from "react-router-dom"
import { calculateDate } from "../../../Utils/fetchData"
import classes from "./jobcard.module.css"
import noCompany from "../../../Assets/JobListAssets/None.png"
import SaveContext from "../../../Store/context"
import { useContext } from "react"

export default function JobCard({ job }) {
  
  const postedDaysAgo = calculateDate(job.job_posted_at_datetime_utc)

  const saveCtx = useContext(SaveContext)
  console.log(saveCtx.savedJobs)
  const calendar = <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#6e00be" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg>

  function saveJob(job){
    // saveCtx.saveJob()
    
    
    console.log(job)
  }

  return (
    <div className={classes.card}>
      <div className={classes.companyInfo}>
        <div className={classes.companyLeft}>
          <div className={classes.companyImg}>
            <div style={{backgroundImage: `url(${job.employer_logo ? job.employer_logo : noCompany })`}}/>
          </div>
          <div className={classes.company}>
            <p style={{ fontSize: "16px" }}>{job.employer_name}</p>
            <p style={{ fontSize: "12px" }}>{job.job_city && job.job_city + ","} {job.job_country}</p>
          </div>

        </div>
        <button onClick={() => saveJob(job)}>Save</button>
      </div>

      <div className={classes.jobInfo}>
        <div className={classes.job}>
          <p style={{ fontSize: "20px", marginBottom: "0px" }}>{job.job_title}</p>
          <p style={{ fontSize: "12px", color: "black" }}><span style={{color: "#FFA000"}}>&#x2022;</span> {job.job_employment_type}</p>
        </div>

        <div className={classes.jobNav}>
          <div>
            {calendar}
            <p>{postedDaysAgo <= 0 ? "Recently" : postedDaysAgo + " " + "Days ago"}</p>
          </div>

          <Link to={job.job_apply_link}><button>Apply Now</button></Link>
        </div>
      </div>


    </div>
  )
}