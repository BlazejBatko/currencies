import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import FollowedCurrencies from "./pages/FollowedCurrencies";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />,
        <Route path="followed" element={<FollowedCurrencies />} />,
      </Route>,
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
