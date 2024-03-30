import classes from "./jobsearch.module.css"
import search from "../../Assets/JobSearchAssets/SearchIcon.png"



export default function JobSearch(){
  return (
    <section className={classes.jobSearch}>
      <h1>Looking for a job now</h1>
      <p>Type in the of the position, company or job category you are looking for</p>
      <div className={classes.searchBars}>
        <input placeholder="Category" style={{borderRight: "1px solid gray", borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem"}} type="text" />
        <input placeholder="Location" type="text" />
        <button><img src={search}/> Search</button>
      </div>

      <div>
        <p style={{marginBottom: "0px"}}>Search for jobs</p>
      </div>

    </section>
  )
}