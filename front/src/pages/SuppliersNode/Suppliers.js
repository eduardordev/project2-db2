import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable';
import { Typography, Button } from '@mui/material';

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = async () => {
        try {
            const response = await axios.get('http://3.145.98.75:1913/api/suppliers');
            setSuppliers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://3.145.98.75:1913/api/suppliers/${id}`);
            // Update the suppliers state after successful deletion
            setSuppliers(suppliers.filter(supplier => supplier.id !== id));
        } catch (error) {
            console.error('Error deleting supplier:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Proveedores
            </Typography>
            <DataTable
                table={{
                    columns: [
                        { Header: "Id", accessor: "id" },
                        { Header: "Name", accessor: "name" },
                        { Header: "Address", accessor: "address" },
                        { Header: "Phone", accessor: "phone" },
                        { Header: "Country", accessor: "country" },
                        { Header: "Reputation", accessor: "reputation" },
                        { Header: "Contact", accessor: "contact" },
                        { Header: "Email", accessor: "email" },
                        { Header: "Website", accessor: "website" },
                        {
                            Header: "Actions",
                            accessor: "deleteAction", // Unique accessor ID for Actions column
                            Cell: ({ row }) => (
                                <Button
                                    onClick={() => handleDelete(row.original.id)}
                                    variant="outlined"
                                    sx={{ backgroundColor: 'red', color: 'white' }} // Styling for the button
                                >
                                    Delete
                                </Button>
                            )
                        }
                    ],
                    rows: suppliers
                }}
            />
        </div>
    );
}

export default Suppliers;
