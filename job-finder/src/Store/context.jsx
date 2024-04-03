import { createContext, useState } from "react";

const SaveContext = createContext({
  savedJobs: [],
  saveJob: (job) => { },
  isSavedJobs: false,
  setIsSavedJobs: () => {}
})

export function SavedJobContext({ children }) {
  const [saveJob, setSaveJob] = useState([])
  const [isSavedJobs, setIsSavedJobs] = useState(false)

  const saveContext = {
    savedJobs: saveJob,
    saveJob: setSaveJob,
    isSavedJobs,
    setIsSavedJobs
  }

  return <SaveContext.Provider value={saveContext}>{children}</SaveContext.Provider>
}

export default SaveContext