import { RouterProvider, createBrowserRouter } from "react-router-dom"

/* P A G E S */
import HomePage from "./Pages/HomePage";


/* L O A D E R S */

import { loader } from "./Components/JobSearch/JobSearch";

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <HomePage />, loader: loader }
  ])


  return (
    <>

      <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;
