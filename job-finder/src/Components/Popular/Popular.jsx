import classes from "./popular.module.css"

/* C O M P O N E N T S */
import Tags from "./Tags/Tags"

/* H O O K S */
import { useState } from "react"

/* U T I L S */
import { populerList } from "../../Datas/data"

export default function Popular() {
   const [more, setMore] = useState({
      start: 0,
      end: 14
   })

   function showMoreTag() {
      setMore((prev) => {
         let old = { ...prev }
         old.end += 3
         return old
      })
   }


   const popularListLimited = populerList.slice(more.start, more.end)

   return (
      <section className={classes.popular}>
         <div className={classes.title}>
            <p>Popular Category</p>
         </div>

         <div className={classes.tagList}>
            {popularListLimited.map((tag) => <Tags key={tag.title} tags={tag.title} jobs={tag.jobs} />)}
         </div>

         <div className={classes.navMore}>
            {more.end < populerList.length && <button onClick={() => showMoreTag()}>More Categories &rarr;</button>}
         </div>
      </section>
   )
}