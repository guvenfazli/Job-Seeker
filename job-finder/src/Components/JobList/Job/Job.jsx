import classes from "./job.module.css"

export default function Job(){
  return (
    <div className={classes.job}>
      <div className={classes.jobLeft}>
        <div className={classes.jobImg}>
          Img
        </div>

        <div className={classes.jobDetails}>
          <p style={{marginTop: "0px"}}>JobTitle</p>
          <p>Company Name</p>
          <p>Location</p>
          <p style={{marginBottom: "0px"}}>Days ago posted</p>
        </div>
      </div>

      <div className={classes.jobRight}>
        <div>
          Company Name
          <button>Apply</button>
        </div>

        
      </div>
    
    </div>
  )
}