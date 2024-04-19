import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Modal } from '@mui/material';
import axios from 'axios';

function AddSupplierForm({ onAddSupplier }) {
    const [supplierData, setSupplierData] = useState({
        name: '',
        address: '',
        phone: '',
        country: '',
        reputation: '',
        contact: '',
        email: '',
        website: ''
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplierData({ ...supplierData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://3.145.98.75:1913/api/suppliers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(supplierData)
            });
            if (response.ok) {
                setModalMessage('Supplier added successfully!');
                setModalOpen(true);
                setSupplierData({
                    name: '',
                    address: '',
                    phone: '',
                    country: '',
                    reputation: '',
                    contact: '',
                    email: '',
                    website: ''
                });
                if (typeof onAddSupplier === 'function') {
                    onAddSupplier();
                }
            } else {
                console.error('Failed to add supplier:', response.statusText);
            }
        } catch (error) {
            if (error.response) {
                // Server responded with an error status code
                setModalMessage(`Failed to add supplier. Server responded with status code ${error.response.status}.`);
            } else if (error.request) {
                // Request was made but no response was received
                setModalMessage('Failed to add supplier. No response received from server.');
            } else {
                // An error occurred during the request setup
                setModalMessage('Failed to add supplier. Request setup failed.');
            }
            setModalOpen(true);
            console.error('Error adding supplier:', error);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Crear Proveedor
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Name"
                            value={supplierData.name}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="address"
                            label="Address"
                            value={supplierData.address}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="phone"
                            label="Phone"
                            value={supplierData.phone}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="country"
                            label="Country"
                            value={supplierData.country}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="reputation"
                            label="Reputation"
                            value={supplierData.reputation}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="contact"
                            label="Contact"
                            value={supplierData.contact}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="email"
                            label="Email"
                            value={supplierData.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="website"
                            label="Website"
                            value={supplierData.website}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" style={{ color: 'white' }}>Crear Proveedor</Button>
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

export default AddSupplierForm;
