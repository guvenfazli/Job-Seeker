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
    console.log(formatJob)
    setSearchParams(formatJob)
  }

  const search = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#6b6b6b" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>


  return (
    <section className={classes.home}>
      <div className={classes.homeLeft}>
        <div className={classes.homeText}>
          <p style={{color: "#FFA000"}}>"Discover Your Path to Success:</p>
          <p style={{color: "#00AEFF"}}>Find the Perfect Job</p>
          <p style={{color: "#F412D8", textDecoration: "underline"}}>Today!"</p>
        </div>

        <div className={classes.searchSection}>
          <input ref={jobTitle} className={classes.inputStarter} placeholder="Job title or keyword" type="text" onChange={() => setSearchLink()} />
          <input ref={country} style={{border: "none"}} placeholder="Country or City" type="text" onChange={() => setSearchLink()}/>
          <Link to={`${searchParams}`}>Search</Link>
        </div>
      </div>

      <div className={classes.homeRight}>
        <div className={classes.logoConteiner}>
          
          <div style={{backgroundImage: `url(${icon})`}} />


          <div style={{backgroundImage: `url(${logo})`}} />

        </div>
      </div>


    </section>
  )
}