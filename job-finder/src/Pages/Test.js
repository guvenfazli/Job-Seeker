import { useLoaderData } from "react-router-dom";
import { defer, Await } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { SavedJobContext } from "../Store/context";
import Zest from "../Components/Zest"

export default function Test() {

  const { getPeople } = useLoaderData();

  const [testData, setTestData] = useState([])
  const [loading, setLoading] = useState(false)
  const testRef = useRef()
  useEffect(() => {
    if (testData.length <= 0) {
      async function fetching() {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const resData = await response.json()
        setLoading(false)
        setTestData(resData)

      }

      fetching()
    }


  }, [testData])

  const halfItems = Math.ceil(testData.length / 2)
  const halfArray = testData.slice(0, halfItems)

  return (
    <>
      <p ref={testRef}>Hi, welcome!</p>
      {loading ? <p>DATA IS COMING PLEASE WAIT</p> : <Suspense fallback={<p>GERÇEKTEN ÇALIŞTI</p>}>
        <Await resolve={testData}>
          {(loadedMail) => <Zest data={loadedMail} />}
        </Await>
      </Suspense>
      }

      {halfArray.map((row) => <button>Selam</button>)}


    </>

  )
}

export async function loadPeople() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const resData = await response.json()
  return resData;
}

export async function deferPeople() {
  return defer({
    getPeople: loadPeople()
  })
}