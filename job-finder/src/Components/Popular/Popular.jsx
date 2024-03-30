import classes from "./popular.module.css"
import Tags from "./Tags/Tags"
import { populerList } from "../../Datas/data"

export default function Popular() {
  return (
    <section className={classes.popular}>
      <p className={classes.title}>Popular Category</p>
      <div className={classes.tagList}>
        {populerList.map((row) => <Tags key={row.title} jobs={row.jobs} tags={row.title} />)}

      </div>
      <button style={{fontSize: "20px", border: "none", cursor: "pointer"}}>More Categories &rarr;</button>
    </section>
  )
}