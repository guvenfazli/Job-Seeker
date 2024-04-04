import classes from "./company.module.css"

/* A S S E T S */
import { companyList } from "../../Datas/data"
import CompanyCase from "./Company/Company"


export default function Company() {
  return (
    <section className={classes.companyList}>
      <div className={classes.companyTitle}>
        <p>Supported by 5k+ Companies</p>
      </div>

      <div className={classes.companyShowcase}>
        {companyList.map((comp) => <CompanyCase key={comp.name} comp={comp} />)}
      </div>

    </section>
  )
}