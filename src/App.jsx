import { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import'../src/assets/css/custom.css'
import TopNavbar from './components/TopNavbar'
import HomePage from './pages/HomePage'
import Footer from './components/common/Footer'
import ContactPage from './pages/ContactPage'
import FavoratePage from './pages/FavoratePage'
import NotificationPage from './pages/NotificationPage'
import CartListPage from './pages/CartListPage'
import OrderListPage from './pages/OrderListPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ProductCategoryPage from './pages/ProductCategoryPage'
// import ProductDetailsPage from './pages/ProductDetailsPage'
import SearchProductPage from './pages/SearchProductPage'
import SubCategoryPage from './pages/SubCategoryPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
// import data from './components/data'
function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const language = i18n.resolvedLanguage || 'fr'
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.resolvedLanguage])
  
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/favorites" element={<FavoratePage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/cartList" element={<CartListPage />} />
          <Route path="/profile" element={<OrderListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
           <Route path="/forget_password" element={<ForgetPasswordPage />} />
           <Route path="/reset_password" element={<ResetPasswordPage />} />
          {/* <ProductDetailsPage/> */}
          <Route path="/category" element={<ProductCategoryPage />} />
          <Route path="/search" element={<SearchProductPage />} />
           <Route path="/subcategory" element={<SubCategoryPage />} />
           <Route path="/product/:productId" element={<ProductDetailsPage />} />
           <Route path="/product" element={<ProductDetailsPage />} />
        </Routes>
        <Footer/>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
