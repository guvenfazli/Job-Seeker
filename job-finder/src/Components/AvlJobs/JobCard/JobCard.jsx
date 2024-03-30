import classes from "./jobcard.module.css"
import calendar from "../../../Assets/JobCardAssets/Calendar.png"


export default function JobCard(){
  return (
    <div className={classes.card}>
      <div className={classes.companyInfo}>
        <div className={classes.primaryInfo}>
          <div className={classes.companyImg}>
            Img
          </div>
          <div className={classes.companyTitle}>
            <p>Microsoft</p>
            <p>Washington, USA</p>
          </div>
        </div>

        <button>Save</button>
      </div>

      <div className={classes.jobInfo}>
          <p>Job Title</p>
          <p style={{color: "black", fontSize: "12px", marginBottom: "20px"}}>Time</p>
      </div>

      <div className={classes.applyJob}>
        <div className={classes.jobTime}>
          <img src={calendar}/>
          <p>5 Days Ago</p>
        </div>

        <button className={classes.applyNow}>Apply Now</button>
      </div>


    </div>
  )
}