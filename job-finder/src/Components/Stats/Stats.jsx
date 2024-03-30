import classes from "./stats.module.css"



export default function Stats() {
  return (
    <section className={classes.stats}>
      <div className={classes.detail}>
        <h2>5.3<span style={{color: "#FFA000"}}>K+</span></h2>
        <p>Ready Job Vacancy</p>
      </div>

      <div style={{borderRight: "1px solid gray", borderLeft: "1px solid gray"}} className={classes.detail}>
        <h2>1<span style={{color: "#FFA000"}}>M+</span></h2>
        <p>Job Seekers Active</p>
      </div>

      <div className={classes.detail}>
        <h2>5.5<span style={{color: "#FFA000"}}>K+</span></h2>
        <p>Incorporated Company</p>
      </div>

    </section>
  )
}