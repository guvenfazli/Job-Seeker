import classes from "./aboutsummary.module.css"
import hands from "../../Assets/SummaryAssets/handShake.png"
import bag from "../../Assets/SummaryAssets/fileBag.png"
import bubble from "../../Assets/SummaryAssets/messageBubble.png"




export default function AboutSummary() {
  return (
    <section className={classes.summary}>
      <div className={classes.card}>
        <div className={classes.statIcon} style={{ backgroundImage: `url(${hands})`, backgroundSize: "100% auto" }} />
        <div className={classes.info}>
          <p className={classes.title}>Easy Applying</p>
          <p className={classes.desc}>The process for applying for job is easy and fast.</p>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes.statIcon} style={{ backgroundImage: `url(${bag})` }} />
        <div className={classes.info}>
          <p className={classes.title}>Many Vacancies</p>
          <p className={classes.desc}>There are many job vacancies from various company.</p>
        </div>

      </div>

      <div className={classes.card}>
        <div className={classes.statIcon} style={{ backgroundImage: `url(${bubble})` }} />
        <div className={classes.info}>
          <p className={classes.title}>Best Support</p>
          <p className={classes.desc}>We provide full support for job seeker to achieve better result</p>
        </div>

      </div>

    </section>
  )
}