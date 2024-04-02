import classes from "./avljobs.module.css"
import JobCard from "./JobCard/JobCard"
import { useState, useEffect } from "react"
import fetchJobs, { fetchFilteredJobs } from "../../Utils/fetchData"

export default function AvlJobs() {

  const [pageNum, setPageNum] = useState(1)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  function navigatePage(nav) {
    if (nav === "+") {
      setPageNum(prev => prev += 1)
    } else if (nav === "-") {
      setPageNum(prev => prev -= 1)
    }
  }

  function filterJobsByTime() {
    const filteredByPostTime = data.sort((a, b) => b.job_posted_at_timestamp - a.job_posted_at_timestamp)
    setFilteredData(filteredByPostTime)
  }
  
  /*
 useEffect(() => {

   if (filteredData.length <= 0) {
     async function getData() {
       const jobData = await fetchJobs(pageNum)
       setData(jobData.data)
     }

     getData()

   } else if (filteredData.length >= 0) {
     async function getFilteredData() {
       const filteredJobData = await fetchFilteredJobs(pageNum)
       const filteredByPostTime = filteredJobData.data.sort((a, b) => b.job_posted_at_timestamp - a.job_posted_at_timestamp)
       setFilteredData(filteredByPostTime)
     }

     getFilteredData()

   }


 }, [pageNum])
 */


 // {data.map((job) => <JobCard key={job.job_id} job={job} />)}
 

  console.log(data)

  return (
    <section className={classes.avlJobs}>
      <div className={classes.title}>
        <p>Choose Our Available Jobs</p>
      </div>

      <div className={classes.filter}>
        <div>
          <p>Find the following job that suits you and apply now!</p>
        </div>

        <div>
          <button onClick={() => filterJobsByTime()}>Recent</button>
          <button>Popular</button>
        </div>
      </div>

      <div className={classes.jobShowcase}>
      
      </div>

      <div className={classes.avlJobNav}>
        <button onClick={() => navigatePage("-")}>&larr; Previous</button>
        <button onClick={() => navigatePage("+")}>Next &rarr;</button>
      </div>
    </section>
  )
}