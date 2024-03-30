import classes from "./aboutsummary.module.css"
import hands from "../../Assets/SummaryAssets/handShake.png"
import bag from "../../Assets/SummaryAssets/fileBag.png"
import bubble from "../../Assets/SummaryAssets/messageBubble.png"




export default function AboutSummary() {
  return (
    <section className={classes.summary}>
      <div className={classes.showcase}>
        <div className={classes.card}>
          <div className={classes.cardImg}>
            <img src={hands} alt="hand-shake" />

          </div>

          <div>
            <h2>Easy Applying</h2>
            <p>The process for applying for job is easy and fast</p>

          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.cardImg}>
            <img src={bag} alt="file-bag" />

          </div>

          <div>
            <h2>Many Vacancies</h2>
            <p>The process for applying for job is easy and fast</p>

          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.cardImg}>
            <img src={bubble} alt="message-bubble" />

          </div>

          <div>
            <h2>Best Support</h2>
            <p>The process for applying for job is easy and fast</p>

          </div>
        </div>


      </div>
    </section>
  )
}