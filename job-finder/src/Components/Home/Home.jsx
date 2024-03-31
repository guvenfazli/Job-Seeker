import classes from "./home.module.css"
import search from "../../Assets/HomeAssets/Search.png"
import arrow from "../../Assets/HomeAssets/arrow.png"
import icon from "../../Assets/HomeAssets/LogoIcon.png"
import logo from "../../Assets/HomeAssets/Logo.png"

import { useRef, useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {

  const [searchParams, setSearchParams] = useState()
  const jobTitle = useRef();
  const country = useRef();

  function setSearchLink() {
    const jobTitleFormat = jobTitle.current?.value.replaceAll(/ /g, "%20")
    const countryFormat = country.current?.value.replaceAll(" ", "%20")
    const formatJob = jobTitleFormat + "%20" + countryFormat
    setSearchParams(formatJob)
  }

  return (
    <section className={classes.home}>

      <div className={classes.homeLeft}>
        <p>
          <span style={{ color: "#FFA000" }}>"Discover Your Path to Success:</span> <br /> <span style={{ color: "#00AEFF" }}>Find the Perfect Job</span> <br /> <span style={{ color: "#F412D8", textDecoration: "underline" }}>Today!"</span>
        </p>

        <div className={classes.homeSearch}>
          <div className={classes.inputCont}>
            <img src={search} alt="search-icon" />
            <input ref={jobTitle} style={{ marginLeft: "1rem" }} type="text" placeholder="Job title or keywords" onChange={setSearchLink} />
            <input ref={country} type="text" placeholder="Country" onChange={setSearchLink} />

          </div>
          <button><Link to={`${searchParams}`}>&rarr;</Link></button>

        </div>

      </div>

      <div className={classes.homeRight}>
        <div className={classes.logoHolder}>
          <img src={icon} />
          <img src={logo} />
        </div>

      </div>



    </section>
  )
}