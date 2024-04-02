import { RouterProvider, createBrowserRouter } from "react-router-dom"

/* P A G E S */
import HomePage from "./Pages/HomePage";
import JobListPage from "./Pages/JobListPage";

/* L O A D E R S */
import { loader } from "./Pages/JobListPage";

function App() {

  const router = createBrowserRouter([
    {
      path: '/', children: [
        { index: true, element: <HomePage />,  },
        { path: ':jobName', element: <JobListPage />, loader: loader }
      ]
    }
  ])


  return (
    <>

      <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;
