import classes from "./about.module.css"

export default function About(){
  return (
    <section className={classes.about}>
      <div>
        <p className={classes.title}>More Easier to find a job <br />with our platform</p>
      </div>

      <div>
        <p className={classes.link}>Neuralink-like Personalization</p>
      </div>

      <div>
        <p className={classes.desc}>Imagine having a Neuralink-like connection to our platform, where it understands your unique talents and <br /> aspirations. We provide personalized job recommendations that align perfectly with your skills and <br /> ambitions, empowering you to reach for the stars in your career.</p>
      </div>
    </section>
  )
}