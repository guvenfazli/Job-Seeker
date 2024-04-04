import classes from "./savedjobs.module.css"

/* C O M P O N E N T S */
import SavedJob from "./SavedJob/SavedJob"

/* U T I L S */
import SaveContext from "../../../Store/context"

/* H O O K S */
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

  function pageNavigator(navigate) {
    if (navigate === "+") {
      setPage((prev) => {
        let updated = { ...prev }
        updated.start += 2
        updated.end += 2
        return updated
      })
    } else if (navigate === "-") {
      setPage((prev) => {
        let updated = { ...prev }
        updated.start -= 2
        updated.end -= 2
        return updated
      })
    }
  }

  return (
    <>

      <div className={isOpen ? classes.jobsOn : classes.jobsOff}>
        <button onClick={showSavedJobs} style={{ right: isOpen && "-100px" }} className={classes.isSavedButton}>Saved <br />Jobs</button>

        <div className={classes.savedJobList}>
          <div className={classes.jobListHeader}>
            <p className={classes.title}>Your Saved Jobs {`(${saveCtx.savedJobs.length})`}</p>
            <button onClick={showSavedJobs}>X</button>


          </div>

          {filteredJob.length <= 0 ? <p>You did not save any jobs!</p> : filteredJob.map((job) => <SavedJob job={job} />)}
          <SavedJob  />
          <SavedJob  />
          <SavedJob  />



          {filteredJob.length >= 1 && <div className={classes.savedJobNav}>
            <button disabled={page.start <= 0} onClick={() => pageNavigator("-")}>Prev</button>
            <button disabled={page.end >= saveCtx.savedJobs.length} onClick={() => pageNavigator("+")}>Next</button>
          </div>}


        </div>



      </div>
    </>
  )
}