/*5.React Routing and Data Handling
d. Fetch sample data from a public API using Axios.*/
Code:
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {axios.get("https://dummyjson.com/products")
      .then((response) => {
      setProducts(response.data.products);
    }); }, []);
  return (
    <div>
      <h1>Product List</h1>
      <hr />
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: Rs.{product.price}</p>
        </div>
      ))}
     <h3>Pranay T003</h3>
    </div>
  );
}
export default App;

/*e. Display fetched data in table or list format.*/
Code:
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      });
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <h4>(Pranay T003)</h4>
      <hr />
      <table border="1" cellPadding="10" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;

/*f. Implement search or filter functionality on displayed data.*/
Code:
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      });
  }, []);
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Product Category Search</h1>
      <input
        type="text"
        placeholder="Search category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default App;

