import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function ProductTest() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/product/1'); // Fetch data from Flask backend
      const data = response.json(); // Parse JSON response
      console.log("Product data", data);
      setProducts(data); // Update state with products data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <h1>TEst</h1>
  );
}

export default ProductTest;
