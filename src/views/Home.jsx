import React from 'react';
import Hero from '../components/Hero/Hero';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ClientsSection from '../components/ClientsSection/ClientsSection';
import AboutSection from '../components/AboutSection/AboutSection';
import Products from '../components/Products/Products';
import favoriteContext from '../contexts/favorite/context';

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1204 });
  const [clients, setClients] = useState(null);
  const [features, setFeatures] = useState(null);
  const { products, setProducts } = useContext(favoriteContext);

  const handleChangeFavorite = async (id, checked) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/products/${id}`,
        { 'isFavorite': checked },
        { headers: { 'Content-Type': 'application/json' } }
      );
      if (response.status === 200) {
        const newProducts = products.map((product) => {
          if (product.id === id) {
            return response.data;
          }
          return product;
        });
        setProducts(newProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data, headers } = await axios.get(
          'http://localhost:8080/clients?_start=0&_end=6'
        );
        setClients({ items: data, totalClients: headers['x-total-count'] });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/about');
        setFeatures(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/products');
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setProducts]);

  return (
    <>
      <Hero />
      {clients && (
        <ClientsSection
          items={clients.items}
          isMobile={isMobile}
          totalClients={clients.totalClients}
        />
      )}
      {features && <AboutSection data={features} />}
      {products.length > 0 && (
        <Products products={products} handleFavorite={handleChangeFavorite} />
      )}
    </>
  );
}
