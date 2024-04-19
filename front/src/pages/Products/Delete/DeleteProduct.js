import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteProduct() {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://3.145.98.75:1913/api/products/${productId}`);
      setProductData(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      // Optionally, display an error message to the user
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://3.145.98.75:1913/api/products/${productId}`);
      // Optionally, display a success message to the user
      setProductData(null); // Reset product data after deletion
      setProductId(''); // Reset product id field
    } catch (error) {
      console.error('Error deleting product:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Delete Product
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="Product ID"
            value={productId}
            onChange={handleProductIdChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        </Grid>
        {productData && (
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Product Details
            </Typography>
            <Typography>ID: {productData.product_id}</Typography>
            <Typography>Name: {productData.name}</Typography>
            <Typography>Type: {productData.type}</Typography>
            <Typography>Stock: {productData.stock}</Typography>
            <Typography>Brand: {productData.brand}</Typography>
            <Typography>Description: {productData.description}</Typography>
            <Button variant="contained" color="error" endIcon={<DeleteIcon />} onClick={handleDelete}>Delete Product</Button>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default DeleteProduct;
