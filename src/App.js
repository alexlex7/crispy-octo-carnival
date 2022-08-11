import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { useState, useEffect, useContext } from 'react';
import Home from './views/Home';
import axios from 'axios';
import favoriteContext from './contexts/favorite/context';

function App() {
  const [pages, setPages] = useState([]);
  const { products, setProducts } = useContext(favoriteContext);

  useEffect(() => {
    const getPages = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/pages');
        setPages(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getPages();
  }, []);

  return (
    <>
      {pages.length > 0 ? (
        <>
          <Navigation items={pages} products={products} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      ) : null}
    </>
  );
}

export default App;
