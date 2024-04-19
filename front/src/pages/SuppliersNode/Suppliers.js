import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable';
import { Typography } from '@mui/material';

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  // http://18.191.199.191:1913/api/inventories/56270
  const fetchSuppliers = async () => {
    try {
        const response = await axios.get('http://3.145.98.75:1913/api/suppliers');
        setSuppliers(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
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
                  ],
                  rows: suppliers
              }}
          />
      </div>
  );
}

export default Suppliers;
