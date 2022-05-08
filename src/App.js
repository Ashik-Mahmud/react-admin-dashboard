import { Route, Routes } from "react-router-dom";
import AddProduct from "./Dashboard/AddProduct/AddProduct";
import Admin from "./Dashboard/Admin/Admin";
import AllProducts from "./Dashboard/AllProducts/AllProducts";
import Analytics from "./Dashboard/Analytics/Analytics";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Admin />} >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="manage-products" element={<AllProducts/>} />
            <Route path="analytics" element={<Analytics/>} />
          </Route>
      </Routes>
        
    </>
  );
}

export default App;
