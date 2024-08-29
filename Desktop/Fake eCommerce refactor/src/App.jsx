import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductCategory from './pages/ProductCategory';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:categoryName" element={<ProductCategory />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
