import { useState } from "react";
import Search from "./components/Search"
import ProductDisplay from "./components/ProductDisplay";

function App() {

  const [food, setFood] = useState([]);


  return (
    <>
      <Search food={food} setFood={setFood} />
      <ProductDisplay key={food.id} food={food} />
    </>
  )
}

export default App
