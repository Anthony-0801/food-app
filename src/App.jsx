import { useState } from "react";
import Search from "./components/Search"

function App() {

  const [food, setFood] = useState([]);


  return (
    <>
      <Search food={food} setFood={setFood} />
      {
        food.map(item => <h1>{item.title}</h1>)
      }
    </>
  )
}

export default App
