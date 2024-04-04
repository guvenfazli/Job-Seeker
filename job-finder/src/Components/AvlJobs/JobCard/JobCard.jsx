import classes from "./jobcard.module.css"

/* H O O K S */
import { Link } from "react-router-dom"
import { useContext } from "react"

/* A S S E T S */
import noCompany from "../../../Assets/JobListAssets/None.png"
import { calendar } from "./JobCardIcons"

/* U T I L S */
import { calculateDate } from "../../../Utils/fetchData"
import SaveContext from "../../../Store/context"


export default function JobCard({ job }) {

  const postedDaysAgo = calculateDate(job.job_posted_at_datetime_utc)

  const saveCtx = useContext(SaveContext)
  const alreadySaved = saveCtx.savedJobs.some((jobCheck) => job.job_id === jobCheck.job_id)


  function saveJob(job) {
    saveCtx.saveJob((prev) => {
      let updatedList = [...prev]
      updatedList.push(job)
      return updatedList;
    })
  }

  return (
    <div className={classes.card}>
      <div className={classes.companyInfo}>
        <div className={classes.companyLeft}>
          <div className={classes.companyImg}>
            <div style={{ backgroundImage: `url(${job.employer_logo ? job.employer_logo : noCompany})` }} />
          </div>
          <div className={classes.company}>
            <p style={{ fontSize: "16px" }}>{job.employer_name}</p>
            <p style={{ fontSize: "12px" }}>{job.job_city && job.job_city + ","} {job.job_country}</p>
          </div>

        </div>
        <button disabled={alreadySaved} onClick={() => saveJob(job)}>{alreadySaved ? "Saved" : "Save"}</button>
      </div>

      <div className={classes.jobInfo}>
        <div className={classes.job}>
          <p style={{ fontSize: "20px", marginBottom: "0px" }}>{job.job_title}</p>
          <p style={{ fontSize: "12px", color: "black" }}><span style={{ color: "#FFA000" }}>&#x2022;</span> {job.job_employment_type}</p>
        </div>

        <div className={classes.jobNav}>
          <div>
            {calendar}
            <p>{postedDaysAgo <= 0 ? "Recently" : postedDaysAgo + " " + "Days ago"}</p>
          </div>

          <Link target="_blank" to={job.job_apply_link}><button>Apply Now</button></Link>
        </div>
      </div>


    </div>
  )
}