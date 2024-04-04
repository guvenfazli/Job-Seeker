export function fixUrlParam(jobTitle, jobCountry){
  const jobTitleFormat = jobTitle.current?.value.replaceAll(/ /g, "%20")
  const countryFormat = jobCountry.current?.value.replaceAll(" ", "%20")
  const formatJob = jobTitleFormat + "%20" + countryFormat
  return formatJob
}