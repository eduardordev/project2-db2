import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable';
import { Typography } from '@mui/material';

function TransportRoutes() {
  const [transport_routes, setTransportRoutes] = useState([]);

  useEffect(() => {
    fetchTransportRoutes();
  }, []);

  // http://18.191.199.191:1913/api/inventories/56270
  const fetchTransportRoutes = async () => {
    try {
        const response = await axios.get('http://3.145.98.75:1913/api/transport-routes');
        setTransportRoutes(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  return (
      <div>
          <Typography variant="h4" gutterBottom>
              Rutas de Transporte
          </Typography>
          <DataTable
              table={{
                  columns: [
                      { Header: "Id", accessor: "id" },
                      { Header: "Origin", accessor: "origin" },
                      { Header: "Destination", accessor: "destination" },
                      { Header: "Cost", accessor: "cost" },
                      { Header: "Estimated Time", accessor: "estimatedTime" },
                      { Header: "Company", accessor: "company" },
                  ],
                  rows: transport_routes
              }}
          />
      </div>
  );
}

export default TransportRoutes;
