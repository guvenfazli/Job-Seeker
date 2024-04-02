import classes from "./popular.module.css"
import Tags from "./Tags/Tags"
import { populerList } from "../../Datas/data"

export default function Popular() {
  return (
    <section className={classes.popular}>
     <div className={classes.title}>
        <p>Popular Category</p>
     </div>  
     
     <div className={classes.tagList}>
        {populerList.map((tag) => <Tags key={tag.title} tags={tag.title} jobs={tag.jobs} />)}
     </div>

     <div className={classes.navMore}>
        <button>More Categories &rarr;</button>
     </div>
    </section>
  )
}