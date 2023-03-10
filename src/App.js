import HomePage from './page/Home/HomePage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import NavBarLogin from './components/Utility/NavBarLogin';
import Footer from './components/Utility/Footer';
import LoginPage from './page/Auth/LoginPage';
import RegisterPage from './page/Auth/RegisterPage';
import AllCategoryPage from './page/Category/AllCategoryPage';
import ShopProductsPage from './page/Products/shopProductPage';
import ProductDetalisPage from './page/Products/proudectDetailsPage';
import CartPage from './page/Cart/CartPage';
import ChoosePayMethoudPage from './page/checkout/choosePayMethodPage';
import UserAllOrdersPage from './page/User/UserAllOrederPage';
import UserFavoriteProductsPage from './page/User/UserFavoriteProductsPage';
import UserAllAddresPage from './page/User/UserAllAddresPage';
import UserAddAddressPage from './page/User/UserAddAddressPage';
import UserEditAddressPage from './page/User/UserEditAddressPage';
import UserProfilePage from './page/User/UserProfilePage';


function App() {
  return (
    <div className='font'>
      <NavBarLogin/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/allcategory' element={<AllCategoryPage/>}/>
          <Route path='/products' element={<ShopProductsPage/>}/>
          <Route path='/products/:id' element={<ProductDetalisPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/order/paymethoud' element={<ChoosePayMethoudPage/>}/>
          <Route path='/user/allorders' element={<UserAllOrdersPage/>}/>
          <Route path='/user/favoriteproducts' element={<UserFavoriteProductsPage/>}/>
          <Route path='/user/addresses' element={<UserAllAddresPage/>}/>
          <Route path='/user/add-address' element={<UserAddAddressPage/>}/>
          <Route path='/user/edit-address' element={<UserEditAddressPage/>}/>
          <Route path='/user/profile' element={<UserProfilePage/>}/>
          
        </Routes>
        
      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
