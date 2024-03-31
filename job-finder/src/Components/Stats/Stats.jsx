import classes from "./stats.module.css"



export default function Stats() {
  return (
    <section className={classes.stats}>
      <div>
        <p className={classes.title}>5.3 <span style={{color: "#FFA000"}}>K+</span></p>
        <p className={classes.desc}>Ready Job Vacancy</p>
      </div>

      <div style={{borderLeft: "1px solid gray", borderRight: "1px solid gray"}}>
        <p className={classes.title}>1 <span style={{color: "#FFA000"}}>M+</span></p>
        <p className={classes.desc}>Job Seekers Active</p>

      </div>

      <div>
        <p className={classes.title}>5.5 <span style={{color: "#FFA000"}}>K+</span></p>
        <p className={classes.desc}>Incorporated Company</p>

      </div>
    </section>
  )
}