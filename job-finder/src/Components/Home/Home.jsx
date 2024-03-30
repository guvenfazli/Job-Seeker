import classes from "./home.module.css"
import search from "../../Assets/HomeAssets/Search.png"
import arrow from "../../Assets/HomeAssets/arrow.png"
import icon from "../../Assets/HomeAssets/LogoIcon.png"
import logo from "../../Assets/HomeAssets/Logo.png"


export default function Home() {
  return (
    <section className={classes.home}>

      <div className={classes.homeLeft}>
        <p>
          <span style={{ color: "#FFA000" }}>"Discover Your Path to Success:</span> <br /> <span style={{ color: "#00AEFF" }}>Find the Perfect Job</span> <br /> <span style={{ color: "#F412D8", textDecoration: "underline" }}>Today!"</span>
        </p>

        <div className={classes.homeSearch}>
          <div className={classes.inputCont}>
            <img src={search} alt="search-icon" />
            <input type="text" placeholder="Job title or keywords" />
            <input type="text" placeholder="Country" />

          </div>
          <button><img src={arrow} alt="arrow-icon" /></button>

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