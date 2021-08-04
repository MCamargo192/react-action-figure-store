import { useEffect, useState } from 'react';
import CartProvider from './components/store/CartProvider';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Photos from './components/Photos/Photos';
import Filter from './components/Filters/Filter';
import products from './assets/products/products';


const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [filters, setFilters] = useState({
    min: 0,
    max: 200,
    categories: ['animes', 'games', 'movies'],
    sortBy: ''
  });
  const [filteredProducts, setFilteredProducts] = useState({ ...products });

  useEffect(() => {
    let sortedProducts = products.filter(item => filters.categories.includes(item.category) && (item.price >= filters.min && item.price <= filters.max));

    if (filters.sortBy === 'A-Z')
      sortedProducts = sortedProducts.sort((a, b) => a.name < b.name ? -1 : 1);

    if (filters.sortBy === 'Z-A')
      sortedProducts = sortedProducts.sort((a, b) => b.name < a.name ? -1 : 1);

    if (filters.sortBy === 'Low')
      sortedProducts = sortedProducts.sort((a, b) => a.price < b.price ? -1 : 1);

    if (filters.sortBy === 'High')
      sortedProducts = sortedProducts.sort((a, b) => b.price < a.price ? -1 : 1);

    setFilteredProducts(sortedProducts);
  }, [filters]);

  const showCartHandler = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };
  const showPhotosHandler = (photos) => {
    if (photos.length > 0)
      setPhotos(photos);

    setShowPhotos(prevShowPhotos => !prevShowPhotos);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={showCartHandler} />}
      {showPhotos && <Photos onClose={showPhotosHandler} images={photos} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Filter setFilters={setFilters} />
        <Products onClose={showPhotosHandler} products={filteredProducts} />
      </main>
    </CartProvider>
  )
}

export default App;
