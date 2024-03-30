import classes from "./join.module.css"
import logo from "../../Assets/JoinAssets/JoinLogo.png"


export default function Join() {
  return (
    <section className={classes.join}>
      <div className={classes.purpleCard}>
        <div className={classes.foundIt}>
          <img src={logo} alt="found-it-logo" />
        </div>

        <div className={classes.joinInfo}>
          <h4>Let's start joining us and <br /> get a job</h4>
          <p>Let's join our platform at jobs me for an experience in finding a job that is easier <br /> and matches what you are looking for.</p>
          <div>
            <button>Join Now</button>
            <button>Learn more &rarr;</button>
          </div>
        </div>
      </div>


    </section>
  )
}