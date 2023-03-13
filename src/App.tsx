import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useAppDispatch, useAppSelector } from "./hook";
import Routes from "./pages/routes";
import { useEffect } from 'react';
import { fetchProduct } from "./store/slice/products";


function App() {

  const { list, loading, error } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  console.log(loading)


  { error && <>404</> }
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
