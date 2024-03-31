import classes from "./header.module.css"
import logo from "../../Assets/HeaderAssets/HeaderLogo.png"

export default function Header() {
  const hamb = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
  return (
    <header>
      <div className={classes.headerLeft}>
        <div style={{ display: "flex", alignItems: "center", marginRight: "1rem", cursor: "pointer" }}>
          {hamb}
        </div>

        <div className={classes.headerLogo}>
          <img src={logo} />
        </div>
      </div>

      <div className={classes.headerMiddle}>
        <button>Home</button>
        <button>Jobs</button>
        <button>Test</button>
        <button>Premium</button>
        <button>Create Resume</button>
      </div>

      <div className={classes.headerRight}>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>

    </header>
  )
}