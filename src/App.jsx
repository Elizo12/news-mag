import { useState } from "react";
import Navigation from "./Components/Navigation";
import NewsBoard from "./Components/NewsBoard";
const App = () =>{
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navigation setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>    
  )
}

export default App;