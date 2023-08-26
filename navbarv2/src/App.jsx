import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer.jsx";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* muestra todos los productos */}
        <Route path="/" element={<ItemListContainer />} />

        {/* muestra los productos de una categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;