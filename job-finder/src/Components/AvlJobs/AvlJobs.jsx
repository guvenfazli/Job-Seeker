import classes from "./avljobs.module.css"
import JobCard from "./JobCard/JobCard"
import { useState, useEffect } from "react"
import fetchJobs from "../../Utils/fetchData"

export default function AvlJobs() {

  const [pageNum, setPageNum] = useState(1)
  const [data, setData] = useState([])

  function navigatePage(nav) {
    if (nav === "+") {
      setPageNum(prev => prev += 1)
    } else if(nav === "-") {
      setPageNum(prev => prev -= 1)
    }
  }

  useEffect(() => {
    async function getData() {
      const jobData = await fetchJobs(pageNum)
      setData(jobData.data)
    }
    getData()
  }, [pageNum])

  console.log(data)




  return (
    <section className={classes.avlJobs}>
      <div className={classes.avlTitle}>
        <h4>Choose Our Available Jobs</h4>
        <div>
          <p>Find the following job that suits you and apply!</p>
          <nav>
            <button>Recent</button>
            <button>Popular</button>
          </nav>
        </div>
      </div>

      <div className={classes.avlList}>
        {data.map((job) => <JobCard key={job.job_id} job={job} />)}


      </div>

      <div className={classes.allJobsButton}>
        <button onClick={() => navigatePage("-")}>&larr; Previous</button>
        <button onClick={() => navigatePage("+")}>Next &rarr;</button>

      </div>
    </section>
  )
}