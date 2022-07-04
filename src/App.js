import React from "react";
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Cart from './components/Cart/Cart';
import axios from "axios";

function App() {
  let [data,setData]=React.useState();

  const fetchApi=async ()=>{

    let {data}= await axios.get("https://fakestoreapi.com/products")
    setData(data);

}

React.useEffect(()=>{fetchApi()},[]);
  return (
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home data={data}/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
