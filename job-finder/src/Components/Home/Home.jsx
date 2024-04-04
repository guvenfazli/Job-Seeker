import classes from "./home.module.css"

/* H O O K S */
import { useRef, useState } from "react"
import { Link } from "react-router-dom"


/* A S S E T S */
import icon from "../../Assets/HomeAssets/LogoIcon.png"
import logo from "../../Assets/HomeAssets/Logo.png"


/* U T I L S */
import { fixUrlParam } from "../../Utils/fixUrlParams"

export default function Home() {

  const [searchParams, setSearchParams] = useState()
  const jobTitle = useRef();
  const country = useRef();

  function setSearchLink() {
    const formatJob = fixUrlParam(jobTitle, country)
    setSearchParams(formatJob)
  }

  return (
    <section className={classes.home}>
      <div className={classes.homeLeft}>
        <div className={classes.homeText}>
          <p style={{ color: "#FFA000" }}>"Discover Your Path to Success:</p>
          <p style={{ color: "#00AEFF" }}>Find the Perfect Job</p>
          <p style={{ color: "#F412D8", textDecoration: "underline" }}>Today!"</p>
        </div>

        <div className={classes.searchSection}>
          <input name="jobTitle" ref={jobTitle} className={classes.inputStarter} placeholder="Job title or keyword" type="text" onChange={() => setSearchLink()} />
          <input name="countryOfJob" ref={country} style={{ border: "none" }} placeholder="Country or City" type="text" onChange={() => setSearchLink()} />
          <Link to={`${searchParams}`}>Search</Link>
        </div>
      </div>

      <div className={classes.homeRight}>
        <div className={classes.logoConteiner}>
          <div style={{ backgroundImage: `url(${icon})` }} />

          <div style={{ backgroundImage: `url(${logo})` }} />
        </div>
      </div>
    </section>
  )
}