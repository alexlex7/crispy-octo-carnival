import React from 'react';
import Hero from '../components/Hero/Hero';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ClientsSection from '../components/ClientsSection/ClientsSection';
import AboutSection from '../components/AboutSection/AboutSection';
import Products from '../components/Products/Products';
import favoriteContext from '../contexts/favorite/context';
import Modal from '../components/Modal/Modal';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import FeedbackList from '../components/FeedbackList/FeedbackList';
import { addFeedback, getFeedbacks } from '../API/feedback';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

const bodyLink = document.querySelector('body');

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1204 });
  const [clients, setClients] = useState(null);
  const [features, setFeatures] = useState(null);
  const { products, setProducts } = useContext(favoriteContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState(null);

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

  useEffect(() => {
    (async () => {
      const data = await getFeedbacks();
      setFeedbacks(data);
    })();
  }, [setFeedbacks]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filteredFeedbacks = feedbacks
    ? feedbacks
        .filter((item) => item.rating >= 3.5)
        .slice(-3)
        .reverse()
    : null;

  const onSubmitForm = async (feedback) => {
    await addFeedback(feedback);
    toggleModal();
    const response = await getFeedbacks();
    setFeedbacks(response);
  };

  useEffect(() => {
    if (isModalOpen) {
      bodyLink.classList.add('scroll-hidden');
    }
    if (!isModalOpen) {
      bodyLink.classList.remove('scroll-hidden');
    }
  });

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
      {features && (
        <Element name="about">
          <AboutSection data={features} />
        </Element>
      )}
      {products.length > 0 && (
        <Element name="furniture">
          <Products products={products} handleFavorite={handleChangeFavorite} />
        </Element>
      )}

      {feedbacks && !isMobile && (
        <Element name="feedbacks">
          <FeedbackList items={filteredFeedbacks} />
        </Element>
      )}
      {feedbacks && isMobile && (
        <Element name="feedbacks">
          <FeedbackList items={filteredFeedbacks.slice(0, 1)} />
        </Element>
      )}
      <button
        style={{
          display: 'block',
          margin: '0 auto',
          marginBottom: '50px',
          padding: '20px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: '#244d4d',
          color: '#fff',
          border: 'none',
        }}
        onClick={toggleModal}
      >
        Leave feedback
      </button>

      <Modal toggleModal={toggleModal} isModalOpen={isModalOpen}>
        <FeedbackForm onSubmitForm={onSubmitForm} toggleModal={toggleModal} />
      </Modal>
    </>
  );
}
