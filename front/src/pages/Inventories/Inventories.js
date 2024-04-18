import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable';
import { Typography } from '@mui/material';

// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function Inventories() {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetchInventories();
  }, []);

  // http://18.191.199.191:1913/api/inventories/56270
  const fetchInventories = async () => {
    try {
        const response = await axios.get('http://18.191.199.191:1913/api/inventories');
        setInventories(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  return (
      <div>
          <Typography variant="h4" gutterBottom>
              Inventarios
          </Typography>
          <DataTable
              table={{
                  columns: [
                      { Header: "Id", accessor: "id" },
                      { Header: "Product Id", accessor: "productId" },
                      { Header: "Location", accessor: "location" },
                      { Header: "Quantity", accessor: "quantity" },
                      { Header: "Status", accessor: "status" },
                      { Header: "Update Date", accessor: "updateDate" },
                  ],
                  rows: inventories
              }}
          />
      </div>
  );
}

export default Inventories;
