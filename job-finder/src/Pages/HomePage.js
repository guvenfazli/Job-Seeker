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


export default function HomePage() {

  return (
    <>
      <Home />
      <Company />
      <Stats />
      <About />
      <AboutSummary />
      <JobSearch />
      <Popular />
      <AvlJobs />
      <Join />
      <Footer />
    </>
  )
}

