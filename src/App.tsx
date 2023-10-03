import './App.css'
import { Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar.tsx";
import {Home} from "./pages/home.tsx";
import {Category} from "./pages/category.tsx";
import {ShoppingCartProvider} from "./context/pdoductProviderContext.tsx";
import {Store} from "./pages/store.tsx";
import {Item} from "./components/item.tsx";
import {Categories} from "./components/categories.tsx";

function App() {

  return (
    <ShoppingCartProvider>
      <Navbar></Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/store" element={<Store/>} />
          <Route path="/item" element={<Item/>} />
          <Route path="/categoryItem" element={<Categories/>} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
