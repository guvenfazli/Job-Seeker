import classes from "./about.module.css"

export default function About(){
  return (
    <section className={classes.about}>
      <div className={classes.aboutInfo}>
          <h2>
            More Easier to find a job <br />
            with our platform
          </h2>

          <p style={{color: "#6E00BE", textDecoration: "underline", fontSize: "24px", fontWeight: "500"}}>Neuralink-like Personalization</p>

          <p>Imagine having a Neuralink-like connection to our platform, where it understands your unique talents and  aspirations. We provide personalized job recommendations that align perfectly with your skills and  ambitions, empowering you to reach for the stars in your career.</p>
      </div>
    </section>
  )
}