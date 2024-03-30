import classes from "./header.module.css"
import logo from "../../Assets/HeaderLogo.png"
import hamburger from "../../Assets/Hamburger.png"

export default function Header() {
  return (
    <header>
      <div className={classes.headerLeft}>
        
        <div className={classes.hambuMenu}>
          <img src={hamburger} alt="hambu-menu" />
        </div>


        <div className={classes.headerLogo}>
          <img src={logo} alt="companyLogo" />
        </div>

      </div>

      <div className={classes.headerRight}>

        <nav>
          <button>Home</button>
          <button>Jobs</button>
          <button>Test</button>
          <button>Premium</button>
          <button>Create Resume</button>
        </nav>

        <div className={classes.account}>
          <button className={classes.signUp}>Sign Up</button>
          <button>Login</button>
        </div>

      </div>

  

    </header>
  )
}