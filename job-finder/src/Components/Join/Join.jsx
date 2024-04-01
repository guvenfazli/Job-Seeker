import classes from "./join.module.css"


export default function Join() {
  return (
    <section className={classes.joinSection}>
      <div className={classes.join}>
        <div className={classes.fakeDiv}>
          <div className={classes.joinLogo} />
         

          <div className={classes.joinText}>
            <p className={classes.title}>Let's start joining us and <br /> get a job</p>
            <p className={classes.desc}>Let's join our platform at jobs me for an experience in finding a job that is <br /> easier and matches what you are looking for</p>
            <div className={classes.joinNav}>
              <button>Join Now</button>
              <button style={{ border: "none", boxShadow: "none" }}>Learn More 	&rarr;</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}