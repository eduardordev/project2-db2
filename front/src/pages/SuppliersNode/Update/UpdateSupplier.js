import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

function UpdateSupplier() {
  const [supplierId, setSupplierId] = useState('');
  const [supplier, setSupplier] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    country: '',
    reputation: '',
    contact: '',
    email: '',
    website: ''
  });

  const handleSupplierIdChange = (event) => {
    setSupplierId(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://3.145.98.75:1913/api/suppliers/${supplierId}`);
      setSupplier(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching supplier:', error);
    }
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://3.145.98.75:1913/api/suppliers/${supplierId}`, formData);
      console.log('Supplier updated successfully:', response.data);
      // Optionally, reset the form or show a success message
    } catch (error) {
      console.error('Error updating supplier:', error);
      // Optionally, show an error message
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Update Supplier
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
        <Grid item xs={1}>
          <Button variant="contained" color="primary" onClick={handleSearch} style={{ color: 'white' }}>Search</Button>
        </Grid>
        {supplier && (
          <Grid item xs={12}>
            <form onSubmit={handleFormSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Address"
                    value={formData.address}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="Phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="country"
                    label="Country"
                    value={formData.country}
                    onChange={handleFormChange}
                  />
                </Grid>
                {/* Add more fields for other supplier details */}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" style={{ color: 'white' }}>Update Supplier</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default UpdateSupplier;
