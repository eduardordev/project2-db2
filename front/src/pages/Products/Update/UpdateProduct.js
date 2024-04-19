import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Modal } from '@mui/material';
import axios from 'axios';

function UpdateProduct() {
    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        stock: 0,
        brand: '',
        description: ''
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleProductIdChange = (event) => {
        setProductId(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://3.145.98.75:1913/api/products/${productId}`);
            setProduct(response.data);
            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
            setModalMessage(`Product with ID ${productId} not found.`);
            setModalOpen(true);
        }
    };

    const handleFormChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://3.145.98.75:1913/api/products/${productId}`, formData);
            console.log('Product updated successfully:', response.data);
            setModalMessage('Product updated successfully!');
            setModalOpen(true);
        } catch (error) {
            console.error('Error updating product:', error);
            setModalMessage(`Failed to update product. Error: ${error.message}`);
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Update Product
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
                <Grid item xs={2} sx={{ textAlign: 'left' }}>
                    <Button variant="contained" color="primary" onClick={handleSearch} style={{ color: 'white' }}>Search</Button>
                </Grid>
                {product && (
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
                                        name="type"
                                        label="Type"
                                        value={formData.type}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="stock"
                                        label="Stock"
                                        type="number"
                                        value={formData.stock}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="brand"
                                        label="Brand"
                                        value={formData.brand}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="description"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        value={formData.description}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" style={{ color: 'white' }}>Update Product</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                )}
            </Grid>
            <Modal open={modalOpen} onClose={handleCloseModal}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
                    <Typography>{modalMessage}</Typography>
                    <Button onClick={handleCloseModal} variant="contained" color="primary" style={{ marginTop: '10px', color: 'white' }}>Close</Button>
                </div>
            </Modal>
        </Paper>
    );
}

export default UpdateProduct;
