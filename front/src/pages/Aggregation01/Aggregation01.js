import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Paper } from '@mui/material';

function Aggregation01() {
    const [data, setData] = useState(0);
    const [selectedStatus, setSelectedStatus] = useState('OS');

    useEffect(() => {
        fetchData(selectedStatus);
    }, [selectedStatus]);

    const fetchData = async (status) => {
        try {
            const response = await axios.get(`http://3.145.98.75:1913/api/inventories/totalQuantity/${status}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };  

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    return (
        <div>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Cantidad total de productos ordenados por estado
                </Typography>
                <div>
                    <label htmlFor="year">Seleccionar Estado:</label>
                    <select id="year" value={selectedStatus} onChange={handleStatusChange} style={{ fontSize: '16px', marginLeft: '10px', padding: '2px' }}>
                        <option value="OS">OS</option>
                        <option value="A">A</option>
                        <option value="IP">IP</option>
                        {/* Add more years as needed */}
                    </select>
                </div>
                <Typography variant="h6" gutterBottom>
                    Cantidad: {data}
                </Typography>
            </Paper>
        </div>
    );
    
}

export default Aggregation01;
