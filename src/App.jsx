import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/skills",
      element: <Skills></Skills>,
    },
    {
      path: "/projects",
      element: <Projects></Projects>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
