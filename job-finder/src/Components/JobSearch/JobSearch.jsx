import classes from "./jobsearch.module.css"

/* H O O K S */
import { useRef, useState } from "react"
import { Link } from "react-router-dom";

/* U T I L S */
import { fixUrlParam } from "../../Utils/fixUrlParams";

export default function JobSearch() {

  const [searchParams, setSearchParams] = useState()
  const jobTitle = useRef();
  const country = useRef();

  function setSearchLink() {
    const formatJob = fixUrlParam(jobTitle, country)
    setSearchParams(formatJob)
  }


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
          <input ref={jobTitle} onChange={setSearchLink} name="jobCategory" type="text" style={{ borderRight: "1px solid gray", borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem" }} placeholder="Category" />
          <input ref={country} onChange={setSearchLink} name="countryOfJob" type="text" placeholder="Country" />
          <Link to={`${searchParams}`}>Search</Link>
        </div>
      </div>
    </section>

  )
}
