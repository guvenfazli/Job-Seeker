export default async function fetchJobs() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '37574890f8mshf7df8902a5e92e6p1081e2jsnbd77d46d9ddc',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const response = await fetch("https://jsearch.p.rapidapi.com/search?query=a&page=1&num_pages=1", options)
  const resData = await response.json();
  return resData;
}