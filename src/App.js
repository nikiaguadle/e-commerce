import { BrowserRouter,Route, Routes} from "react-router-dom";
import "./App.css"
import  Header  from "./component/Header";
import Home  from "./component/Home";
import  Cart  from "./component/Cart";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <div>
          <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/cart" exact element={<Cart/>}></Route>
          </Routes>
       </div>
      </BrowserRouter>
   </div>
  );
}

export default App;
