import { useState, useMemo } from 'react';
import favoriteContext from './context';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const providerValue = useMemo(() => {
    return { products, setProducts };
  }, [products]);

  return (
    <favoriteContext.Provider value={providerValue}>
      {children}
    </favoriteContext.Provider>
  );
}
