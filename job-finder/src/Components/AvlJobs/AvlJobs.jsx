import classes from "./avljobs.module.css"
import JobCard from "./JobCard/JobCard"
import { useState, useEffect } from "react"
import fetchJobs, { fetchFilteredJobs } from "../../Utils/fetchData"
import Loading from "../UI/Loading"


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

  const rightArrow = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#000000" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>

  const leftArrow = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#000000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>

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