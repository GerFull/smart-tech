import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useAppDispatch, useAppSelector } from "./hook";
import Routes from "./pages/routes";
import { useEffect } from 'react';
import { fetchProduct, getOneCategory } from "./store/slice/products";


function App() {

  const { list, loading, error } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct())

    //dispatch(getOneCategory('laptops'))
  }, [dispatch])




  return (
    loading ? <h2>Loading...</h2> :
      error ? <h2>An error occured: {error}</h2> :
        <BrowserRouter>

          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
  );
}

export default App;
