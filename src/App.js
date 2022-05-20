import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Js/Blogs';
import Footer from './Components/Js/Footer';
import Header from './Components/Js/Header';
import Home from './Components/Js/Home/Home';
import Products from './Components/Js/Products';
import Login from './Components/Js/Security/Login';
import RequireAuth from './Components/Js/Security/RequireAuth';
import Signup from './Components/Js/Security/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>}>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
