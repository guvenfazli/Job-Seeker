import { useLoaderData, useParams } from "react-router-dom"
import JobList from "../Components/JobList/JobList"
import { fetchJobsByParams } from "../Utils/fetchData"



export default function JobListPage() {
/*
  const data = useLoaderData()
  const searchParam = useParams();
  console.log(data)
  */

  // data={data} searchParam={searchParam}
  return (
    <JobList  />
  )
}
/*
export async function loader({ params }) {
  const data = await fetchJobsByParams(params.jobName)
  return data
} 
*/