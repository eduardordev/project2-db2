import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable';
import { Typography } from '@mui/material';

// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function ProductTest() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // http://18.191.199.191:1913/api/inventories/56270
  const fetchProducts = async () => {
    try {
        const response = await axios.get('http://18.191.199.191:1913/api/inventories');
        console.log(response.data);
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  return (
      <div>
          <Typography variant="h4" gutterBottom>
              Top de Clientes por Total Gastado
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
                  rows: products
              }}
          />
      </div>
  );
}

export default ProductTest;
