import classes from "./jobsearch.module.css"
import search from "../../Assets/JobSearchAssets/SearchIcon.png"


export default function JobSearch() {
  
  
  return (

    <section className={classes.jobSearch}>
      <div className={classes.title}>
        <p>Looking For a Job Now</p>
      </div>

      <div className={classes.desc}>
        <p>Type in the name of tyhe position, company or job category you are looking for</p>
      </div>

      <div className={classes.searchSec}>
        <div className={classes.inputCont}>
          <input name="jobCategory" type="text" style={{ borderRight: "1px solid gray", borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem" }} placeholder="Category" />
          <input name="countryOfJob" type="text" placeholder="Country" />
          <button>Search</button>
        </div>
      </div>
    </section>

  )
}
