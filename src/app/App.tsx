import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import FollowedCurrencies from "../pages/FollowedCurrencies";
import Home from "../pages/Home";
import "./App.css";
import { useEffect, useState } from "react";
import { Rate } from "../Interfaces";
import NotFound from "../pages/NotFound";
import Spinner from "../components/Spinner/Spinner";
import ErrorDisplay from "../components/ErrorDisplay/ErrorDisplay";
function App() {
  const [rates, setCurrencies] = useState<Rate[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          "http://api.nbp.pl/api/exchangerates/tables/A"
        );
        const data = await response.json();
        setCurrencies(data[0].rates);
      } catch (error: any) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrencies();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorDisplay />}>
        <Route index element={<Home rates={rates} />} />,
        <Route path="followed" element={<FollowedCurrencies />} />,
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      {isLoading ? <Spinner /> : null}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
