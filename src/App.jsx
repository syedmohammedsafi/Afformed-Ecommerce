import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(response => {
        setDatas(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem', gap: '1rem' }}>
      {datas.map((product, index) => (
        <div key={index} style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '1rem', width: '18rem', position: 'relative' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{product.productName}</h2>
          <p style={{ color: 'green', fontSize: '1.5rem', marginTop: '0.5rem' }}>${product.price}</p>
          <p style={{ color: 'yellow', fontSize: '1.25rem' }}>Rating: {product.rating}</p>
          <p style={{ color: 'red' }}>Discount: {product.discount}%</p>
          <span style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.875rem', color: 'white', backgroundColor: product.availability === "yes" ? 'green' : 'red' }}>
            {product.availability === "yes" ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
