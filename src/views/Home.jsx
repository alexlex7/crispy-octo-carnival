import React from 'react';
import Hero from '../components/Hero/Hero';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ClientsSection from '../components/ClientsSection/ClientsSection';
import AboutSection from '../components/AboutSection/AboutSection';

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1204 });
  const [clients, setClients] = useState(null);
  const [features, setFeatures] = useState(null);

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
    </>
  );
}
