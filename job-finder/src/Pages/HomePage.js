import Header from "../Components/Header/Header"
import Home from "../Components/Home/Home"
import Company from "../Components/Companies/Company"
import Stats from "../Components/Stats/Stats"
import About from "../Components/About/About"
import AboutSummary from "../Components/AboutSummary/AboutSummary"
import JobSearch from "../Components/JobSearch/JobSearch"
import Popular from "../Components/Popular/Popular"
import AvlJobs from "../Components/AvlJobs/AvlJobs"
import Join from "../Components/Join/Join"
import Footer from "../Components/Footer/Footer"

import { useLoaderData } from "react-router-dom"




export default function HomePage() {

  const data = useLoaderData();

  /*

      <JobSearch />
      <Popular />
      <AvlJobs data={data} />
      <Join />
      <Footer />
       
  */



  return (
    <>
      <Header />
      <Home />
      <Company />
      <Stats />
      <About />
      <AboutSummary />
      <JobSearch />








    </>
  )
}