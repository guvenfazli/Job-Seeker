import { RouterProvider, createBrowserRouter } from "react-router-dom"

/* P A G E S */
import HomePage from "./Pages/HomePage";


/* L O A D E R S */


function App() {

  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> }
  ])


  return (
    <>

      <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;
