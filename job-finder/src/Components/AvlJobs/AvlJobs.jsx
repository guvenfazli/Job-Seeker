import classes from "./avljobs.module.css"
/* H O O K S */
import { useState, useEffect } from "react"

/* C O M P O N E N T S */
import Loading from "../UI/Loading"
import JobCard from "./JobCard/JobCard"

/* U T I L S */
import fetchJobs, { fetchFilteredJobs } from "../../Utils/fetchData"


/* A S S E T S */
import { leftArrow, rightArrow } from "./AvlJobsIcons"


export default function AvlJobs() {

  const [pageNum, setPageNum] = useState(1)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
          setIsLoading(true)
          const jobData = await fetchJobs(pageNum)
          setIsLoading(false)
          setData(jobData.data)
        }
  
        getData()
  
      } else if (filteredData.length >= 0) {
        async function getFilteredData() {
          setIsLoading(true)
          const filteredJobData = await fetchFilteredJobs(pageNum)
          const filteredByPostTime = filteredJobData.data.sort((a, b) => b.job_posted_at_timestamp - a.job_posted_at_timestamp)
          setIsLoading(false)
          setFilteredData(filteredByPostTime)
        }
  
        getFilteredData()
  
      }
  
  
    }, [pageNum])
  
  
  */



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
        {isLoading ? <Loading /> : data.map((job) => <JobCard key={job.job_id} job={job} />)}
      </div>


      {!isLoading && <div className={classes.avlJobNav}>
        {pageNum > 1 && <button onClick={() => navigatePage("-")}>{leftArrow}</button>}

        <button onClick={() => navigatePage("+")}>{rightArrow}</button>
      </div>}


    </section>
  )
}