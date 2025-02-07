import React, { useState } from "react";
import Search from "./components/Search"
import ProductsDisplay from "./components/ProductsDisplay";

function App() {

  const [food, setFood] = useState([]);


  return (
    <>
      <Search food={food} setFood={setFood} />
      <ProductsDisplay key={food.id} food={food} />
    </>
  )
}

export default App
