import { RouterProvider, createBrowserRouter } from "react-router-dom"

/* P A G E S */
import MainRoot from "./Pages/Root/MainRoot";
import HomePage from "./Pages/HomePage";
import JobListPage from "./Pages/JobListPage";

/* L O A D E R S */
import { loader } from "./Pages/JobListPage";

/* C O N T E X T */
import { SavedJobContext } from "./Store/context";

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <MainRoot />, children: [
        { index: true, element: <HomePage />, },
        { path: ':jobName', element: <JobListPage />, loader: loader},
      ]
    },
  ])

  return (
    <SavedJobContext>
      <RouterProvider router={router}></RouterProvider>
    </SavedJobContext>
  );
}

export default App;
