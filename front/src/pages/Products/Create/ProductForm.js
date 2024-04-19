import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Modal } from '@mui/material';
import axios from 'axios';

function AddProductForm({ onAddProduct }) {
    const [productData, setProductData] = useState({
        name: '',
        type: '',
        stock: 0,
        brand: '',
        description: ''
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://3.145.98.75:1913/api/products', productData);
            console.log('Product added successfully:', response.data);
            setProductData({
                name: '',
                type: '',
                stock: 0,
                brand: '',
                description: ''
            });
            setModalMessage('Product added successfully!');
            setModalOpen(true);
            if (typeof onAddProduct === 'function') {
                onAddProduct();
            }
        } catch (error) {
            console.error('Error adding product:', error);
            if (error.response) {
                // Server responded with an error status code
                setModalMessage(`Failed to add product. Server responded with status code ${error.response.status}.`);
            } else {
                // An error occurred during the request setup
                setModalMessage('Failed to add product. Request setup failed.');
            }
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Add Product
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Name"
                            value={productData.name}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="type"
                            label="Type"
                            value={productData.type}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="stock"
                            label="Stock"
                            type="number"
                            value={productData.stock}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="brand"
                            label="Brand"
                            value={productData.brand}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="description"
                            label="Description"
                            multiline
                            rows={4}
                            value={productData.description}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" style={{ color: 'white' }}>Add Product</Button>
                    </Grid>
                </Grid>
            </form>
            <Modal open={modalOpen} onClose={handleCloseModal}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
                    <Typography>{modalMessage}</Typography>
                    <Button onClick={handleCloseModal} variant="contained" color="primary" style={{ marginTop: '10px', color: 'white' }}>Close</Button>
                </div>
            </Modal>
        </Paper>
    );
}

export default AddProductForm;
