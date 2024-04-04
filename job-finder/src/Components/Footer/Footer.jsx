import classes from "./footer.module.css"

/* A S S E T S */
import logo from "../../Assets/FooterAssets/logo.png"
import { fb, insta, yt, tw, linked } from "./footerIcons"


export default function Footer() {


  return (
    <footer>
      <div className={classes.footerLeft}>
        <img src={logo} />
        <div className={classes.socialMedia}>
          {fb}
          {insta}
          {tw}
          {linked}
          {yt}
        </div>
      </div>

      <div className={classes.footerRight}>
        <div className={classes.navBar}>
          <p>Product</p>
          <ul>
            <li>Non IT Jobs</li>
            <li>IT Jobs</li>
            <li>Job Seekers</li>
            <li>Employers</li>
          </ul>
        </div>

        <div className={classes.navBar}>
          <p>Company</p>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Send Feedback</li>
            <li>HTML Sitemap</li>
            <li>XML Sitemap</li>
          </ul>
        </div>

        <div className={classes.navBar}>
          <p>Get in Touch</p>
          <ul>
            <li>info@mail.com</li>
            <li>Tel No: +123456789</li>
            <li>Fax No: +987654321</li>
          </ul>
        </div>

      </div>

    </footer>
  )
}