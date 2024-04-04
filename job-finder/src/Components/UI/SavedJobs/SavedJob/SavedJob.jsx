import classes from "./savedjob.module.css"

/* H O O K S */
import { Link } from "react-router-dom"
import { useContext } from "react"

/* C O N T E X T */
import SaveContext from "../../../../Store/context"


export default function SavedJob({ job }) {

  const savedCtx = useContext(SaveContext)
  

  function removeSavedJob(){
    const jobIndex = savedCtx.savedJobs.findIndex((jobId) => jobId.job_id === job.job_id)
    savedCtx.saveJob((prev) => {
      let updatedList = [...prev]
      updatedList.splice(jobIndex, 1)
      return updatedList
    })
  }

  return (
    <div className={classes.savedJob}>
      <div className={classes.jobInfo}>
        <p>{job.job_title}</p>
        <p>{job.employer_name}</p>
        <p>{job.job_city}</p>
      </div>

      <div className={classes.savedJobAction}>
        <Link target="_blank" to={job.job_apply_link}><button>Apply!</button></Link>
        <button onClick={() => removeSavedJob()} className={classes.removeBtn}>Remove</button>
      </div>
    </div>

  )
}