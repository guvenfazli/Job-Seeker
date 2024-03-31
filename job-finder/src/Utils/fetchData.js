export default async function fetchJobs(pageNum) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '37574890f8mshf7df8902a5e92e6p1081e2jsnbd77d46d9ddc',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=a&page=${pageNum}`, options)
  const resData = await response.json();
  return resData;
}

export async function fetchJobsByParams(params) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '37574890f8mshf7df8902a5e92e6p1081e2jsnbd77d46d9ddc',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const searchValue = params.replaceAll(" ", "%20")

  const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${searchValue}&page=1`, options);
  const resData = await response.json()
  return resData;

}

export async function fetchFilteredJobs(pageNum) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '37574890f8mshf7df8902a5e92e6p1081e2jsnbd77d46d9ddc',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=a&page=${pageNum}`, options)
  const resData = await response.json();
  return resData;
}




export function calculateDate(timeStamp) {
  const dayjs = require('dayjs')
  const today = dayjs()
  const formattedToday = dayjs(today.format('MM/DD/YYYY'))
  const postedTimeStamp = timeStamp
  const postedDate = new Date(postedTimeStamp)
  const formattedDate = dayjs(postedDate.toLocaleDateString('en-US', { year: "numeric", month: "numeric", day: "numeric" }))
  const postedDaysAgo = formattedToday.diff(formattedDate, 'day')
  return postedDaysAgo;
}