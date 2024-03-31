import classes from "./joblist.module.css"
import Job from "./Job/Job"
export default function JobList(){
  
  
  return (
    <section className={classes.jobListSection}>
      <div className={classes.jobList}>
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />

      </div>
    
    
    </section>
  )
}