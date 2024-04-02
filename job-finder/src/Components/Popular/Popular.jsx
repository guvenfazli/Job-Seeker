import classes from "./popular.module.css"
import Tags from "./Tags/Tags"
import { populerList } from "../../Datas/data"
import { useState } from "react"


export default function Popular() {
   const [more, setMore] = useState({
      start: 0,
      end: 14
   })

   function showMoreTag(){
      setMore((prev) => {
         let old = {...prev}
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
        <button onClick={() => showMoreTag()}>More Categories &rarr;</button>
     </div>
    </section>
  )
}