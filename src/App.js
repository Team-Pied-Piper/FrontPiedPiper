import logo from './logo.svg';
import './App.css';
import AdminCheckStore from "./AdminCheckStore";
import AdminInsertProduct from "./AdminInsertProduct";
import AdminViewProducts from "./AdminViewProduct";
import ClientCheckProduct from "./ClientCheckProduct";
import ClientRewiewProduct from "./ClientRewiewProducts";

function App() {
  return (
    <div>
      <h1>Principal</h1>
      <AdminCheckStore></AdminCheckStore>
      <hr></hr><br></br>

      <AdminInsertProduct></AdminInsertProduct>
      <hr></hr><br></br>

      <AdminViewProducts></AdminViewProducts>
      <hr></hr><br></br>

      <ClientCheckProduct></ClientCheckProduct>
      <hr></hr><br></br>

      <ClientRewiewProduct></ClientRewiewProduct>
    </div>
  );
}

export default App;
