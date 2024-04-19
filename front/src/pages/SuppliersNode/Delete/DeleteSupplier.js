import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteSupplier() {
  const [supplierId, setSupplierId] = useState('');
  const [supplierData, setSupplierData] = useState(null);

  const handleSupplierIdChange = (event) => {
    setSupplierId(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://3.145.98.75:1913/api/suppliers/${supplierId}`);
      setSupplierData(response.data);
    } catch (error) {
      console.error('Error fetching supplier:', error);
      // Optionally, display an error message to the user
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://3.145.98.75:1913/api/suppliers/${supplierId}`);
      // Optionally, display a success message to the user
      setSupplierData(null); // Reset supplier data after deletion
      setSupplierId(''); // Reset supplier id field
    } catch (error) {
      console.error('Error deleting supplier:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Delete Supplier
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="Supplier ID"
            value={supplierId}
            onChange={handleSupplierIdChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        </Grid>
        {supplierData && (
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Supplier Details
            </Typography>
            <Typography>ID: {supplierData.id}</Typography>
            <Typography>Name: {supplierData.name}</Typography>
            <Typography>Address: {supplierData.address}</Typography>
            <Typography>Phone: {supplierData.phone}</Typography>
            <Typography>Country: {supplierData.country}</Typography>
            <Typography>Reputation: {supplierData.reputation}</Typography>
            <Typography>Contact: {supplierData.contact}</Typography>
            <Typography>Email: {supplierData.email}</Typography>
            <Typography>Website: {supplierData.website}</Typography>
            <Button variant="contained" color="error" endIcon={<DeleteIcon />} onClick={handleDelete}>Delete Supplier</Button>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default DeleteSupplier;
