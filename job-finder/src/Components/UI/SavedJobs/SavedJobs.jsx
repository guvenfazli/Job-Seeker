import classes from "./savedjobs.module.css"
import SavedJob from "./SavedJob/SavedJob"
import SaveContext from "../../../Store/context"
import { useContext, useState } from "react"




export default function SavedJobs({ isOpen, setIsOpen }) {

  const [page, setPage] = useState({
    start: 0,
    end: 2
  })

  function showSavedJobs() {
    setIsOpen(prev => !prev)
  }

  const saveCtx = useContext(SaveContext)
  const filteredJob = saveCtx.savedJobs.slice(page.start, page.end)

  function pageNavigator(navigate){
    if(navigate === "+"){
      setPage((prev) => {
        let updated = {...prev}
        updated.start += 2
        updated.end += 2
        return updated
      })
    } else if(navigate === "-"){
      setPage((prev) => {
        let updated = {...prev}
        updated.start -= 2
        updated.end -= 2
        return updated
      })
    }
  }

  return (
    <>
      <button onClick={showSavedJobs} className={classes.isSavedButton}>Saved <br />Jobs</button>

      <div className={isOpen ? classes.jobsOn : classes.jobsOff}>
        <div className={classes.savedJobList}>
          <div className={classes.jobListHeader}>
            <p className={classes.title}>Your Saved Jobs {`(${saveCtx.savedJobs.length})`}</p>
            <button onClick={showSavedJobs}>X</button>


          </div>

          {filteredJob.length <= 0 ? <p>You did not save any jobs!</p> : filteredJob.map((job) => <SavedJob job={job} />)}

          {filteredJob.length >= 1 && <div className={classes.savedJobNav}>
            <button onClick={() => pageNavigator("-")}>Prev</button>
            <button onClick={() => pageNavigator("+")}>Next</button>
          </div>}



        </div>



      </div>
    </>
  )
}