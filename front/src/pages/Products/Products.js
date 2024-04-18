import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable';
import { Typography } from '@mui/material';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchInventories();
  }, []);

  // http://18.191.199.191:1913/api/inventories/56270
  const fetchInventories = async () => {
    try {
        const response = await axios.get('http://18.191.199.191:1913/api/products');
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  return (
      <div>
          <Typography variant="h4" gutterBottom>
              Productos
          </Typography>
          <DataTable
              table={{
                  columns: [
                      { Header: "Id", accessor: "id" },
                      { Header: "Name", accessor: "name" },
                      { Header: "Type", accessor: "type" },
                      { Header: "Stock", accessor: "stock" },
                      { Header: "Brand", accessor: "brand" },
                      { Header: "Description", accessor: "description" },
                  ],
                  rows: products
              }}
          />
      </div>
  );
}

export default Products;
