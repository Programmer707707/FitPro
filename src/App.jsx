/* eslint-disable no-unused-vars */
import "./App.css";
import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import { Box } from "@mui/material";
import {Home, ExerciseDetail} from "./pages/index";
import {Navbar, Footer, Layout} from "./components/index";

const router = createBrowserRouter([
{

  path: "/",
  element: <Layout/>,
  children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/exercise/:id",
        element: <ExerciseDetail/>,
      },]
},

]);



const App = () => {
  return (
    <RouterProvider router={router}>
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Footer />
    </Box>
  </RouterProvider>
  )
}

export default App