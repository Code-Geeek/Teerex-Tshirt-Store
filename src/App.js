import { Route , Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Wishlist from './Pages/WishList'
import Header from './Components/Header';
import Footer from './Components/Footer'
import Shop from './Pages/Shop';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/order-success' element={<Shop/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
