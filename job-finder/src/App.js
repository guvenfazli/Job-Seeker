import { RouterProvider, createBrowserRouter } from "react-router-dom"

/* P A G E S */
import MainRoot from "./Pages/Root/MainRoot";
import HomePage from "./Pages/HomePage";
import JobListPage from "./Pages/JobListPage";
import Test from "./Pages/Test";

/* L O A D E R S */
import { loader } from "./Pages/JobListPage";

//  loader: loader JobListPage
function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <MainRoot />, children: [
        { index: true, element: <HomePage />, },
        { path: ':jobName', element: <JobListPage />,},

      ]
    },
    { path: '/test', element: <Test />,}

  ])


  return (
    <>

      <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;
