import classes from "./company.module.css"

import adobe from "../../Assets/CompanyAssets/Adobe.png"
import amazon from "../../Assets/CompanyAssets/Amazon.png"
import google from "../../Assets/CompanyAssets/Google.png"
import microsoft from "../../Assets/CompanyAssets/Microsoft.png"
import paypal from "../../Assets/CompanyAssets/Paypal.png"
import slack from "../../Assets/CompanyAssets/Slack.png"






export default function Company(){
  return (
    <section className={classes.company}>
      <p style={{marginBottom: "3rem"}}>Supported by 5k+ Companies</p>
      
      <div className={classes.companyLogos}>
        <img src={adobe} alt="adobe-logo"/>
        <img src={amazon} alt="amazon-logo"/>
        <img src={google} alt="google-logo"/>
        <img src={microsoft} alt="microsoft-logo"/>
        <img src={paypal} alt="paypal-logo"/>
        <img src={slack} alt="slack-logo"/>
      </div>



    </section>
  )
}