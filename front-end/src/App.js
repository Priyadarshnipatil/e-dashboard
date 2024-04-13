import './App.css';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import SignUp from './component/Signup';
import PrivateComponent from './component/PrivateComponent';
import Login from  './component/Login';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Listing Component</h1>}/>
        <Route path='/add' element={<h1>Add Product Listing Component</h1>}/>
        <Route path='/update' element={<h1>Update Product Listing Component</h1>}/>
        {/* <Route path='/logout' element={<h1>Logout Product Listing Component</h1>}/> */}
        <Route path='/profile' element={<h1>Profile Product Listing Component</h1>}/>
        </Route>
        
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
