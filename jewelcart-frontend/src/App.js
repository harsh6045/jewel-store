import './App.css'; // Import custom CSS for styling
import { Route, Routes } from 'react-router-dom';
import { StockList } from './components/StockList';
import { CreateStock } from './components/CreateStock';
import { AboutUs } from './components/AboutUs';
import Navbar from './components/Navbar';
import { GstBills } from './components/GstBills';
import { UpdateStock } from './components/UpdateStock';
import { UpdateCustomer } from './components/UpdateCustomer';
import Footer from './components/Footer';
import { CustomerStats } from './components/CustomerStats';
import { CreateCustomer } from './components/CreateCustomer';
import HomePage from './components/HomePage';
const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/gstbills' element={<GstBills/>}/>
        <Route path='/customerstats' element={<CustomerStats/>}/>
        <Route path='/createCustomer' element={<CreateCustomer/>}/>
        <Route path='/updateCustomer/:id' element={<UpdateCustomer/>}/>
        <Route path='/createStock' element={<CreateStock/>}/>
        <Route path='/updateStock/:id' element={<UpdateStock/>}/>
        <Route path='/stockList' element={<StockList/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
