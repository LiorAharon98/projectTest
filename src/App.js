import { useState } from "react";
import SignUp from "./componente/SignUp";
import Login from "./componente/Login";
import HomePage from "./componente/HomePage";
import Mangaer from "./componente/Mangaer";
import "./componente/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [workers, setWorkes] = useState([]);
  const [products, setProducts] = useState([
    new Product(11122, "greenBox", false, true),
    new Product(22554, "greenBox", false, true),
    new Product(66698, "blueBox", true, true),
    new Product(78544, "redBox", false, true),
    new Product(69875, "redBox", false, true),
  ]);
  const addWorker = (name, id, license, visit) => {
    const createWorker = new Worker(name, id, license, visit);
    setWorkes([...workers, createWorker]);
  };
  const removeItem = (index) => {
    const temp = [...products];
    temp.splice(index, 1);
    setProducts([...temp]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/manager" element={<Mangaer workers={workers} products={products} />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signUp" element={<SignUp addWorker={addWorker} workers={workers} />}></Route>
          <Route
            path="/login"
            element={<Login workers={workers} products={products} setProducts={setProducts} removeItem={removeItem} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
class Worker {
  constructor(name, id, license, visit) {
    this.name = name;
    this.id = id;
    this.license = license;
    this.visit = visit;
  }
}

class Product {
  constructor(productNum, productName, needForklift, productAvailable) {
    this.productNum = productNum;
    this.productName = productName;
    this.needForklift = needForklift;
    this.productAvailable = productAvailable;
  }
}

export default App;
