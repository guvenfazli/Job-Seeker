import classes from "./savedjobs.module.css"

export default function SavedJobs({ isOpen, setIsOpen }) {

  function showSavedJobs() {
    setIsOpen(prev => !prev)
  }


  return (
    <>

      <div className={isOpen ? classes.jobsOn : classes.jobsOff}>
        <button onClick={showSavedJobs} className={classes.isSavedButton}>Saved <br />Jobs</button>
        <div className={classes.savedJobList}>
          <p className={classes.title}>Your Saved Jobs</p>
          <div className={classes.savedJob}>
            <div className={classes.jobInfo}>
              <p>Job Title</p>
              <p>Company</p>
              <p>City</p>
            </div>

            <button>Apply!</button>
          </div>

          <div className={classes.savedJob}>
            <div className={classes.jobInfo}>
              <p>Job Title</p>
              <p>Company</p>
              <p>City</p>
            </div>

            <button>Apply!</button>
          </div>

          <div className={classes.savedJob}>
            <div className={classes.jobInfo}>
              <p>Job Title</p>
              <p>Company</p>
              <p>City</p>
            </div>

            <button>Apply!</button>
          </div>

          <div className={classes.savedJobNav}>
            <button>Prev</button>
            <button>Next</button>
          </div>

          
        </div>



      </div>
    </>
  )
}