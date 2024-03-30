import classes from "./avljobs.module.css"
import JobCard from "./JobCard/JobCard"



export default function AvlJobs({data}) {

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
        {data.data.map((job) => <JobCard key={job.job_id} job={job} />)}


      </div>

      <div className={classes.allJobsButton}>
        <button>Show All Jobs Arrow &rarr;</button>

      </div>
    </section>
  )
}