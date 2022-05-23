import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Js/Blogs';
import Footer from './Components/Js/Shared/Footer';
import Header from './Components/Js/Shared/Header';
import Home from './Components/Js/Home/Home';
import Login from './Components/Js/Security/Login';
import RequireAuth from './Components/Js/Security/RequireAuth';
import Signup from './Components/Js/Security/Signup';
import AddItems from './Components/Js/Private/AddItems';
import MyItems from './Components/Js/Private/MyItems';
import ManageItems from './Components/Js/Private/ManageProducts';
import MyStuff from './Components/Js/Home/MyStuff';
import UpdateItems from './Components/Js/Private/UpdateItems';
import Products from './Components/Js/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path='/mystuff' element={<MyStuff></MyStuff>}></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>}>
        </Route>
        <Route path='/products/:itemsId' element={
          <RequireAuth>
            <UpdateItems></UpdateItems>
          </RequireAuth>}>
        </Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>
        <Route path='/additems' element={
          <RequireAuth>
            <AddItems></AddItems>
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
