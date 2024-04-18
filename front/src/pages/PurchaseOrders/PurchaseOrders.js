import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable';
import { Typography } from '@mui/material';

function PurchaseOrders() {
  const [purchase_orders, setPurchaseOrders] = useState([]);

  useEffect(() => {
    fetchPurchaseOrders();
  }, []);

  // http://18.191.199.191:1913/api/inventories/56270
  const fetchPurchaseOrders = async () => {
    try {
        const response = await axios.get('http://3.145.98.75:1913/api/purchase-orders');
        setPurchaseOrders(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  return (
      <div>
          <Typography variant="h4" gutterBottom>
              Órdenes de Compra
          </Typography>
          <DataTable
              table={{
                  columns: [
                      { Header: "Id", accessor: "id" },
                      { Header: "Date", accessor: "date" },
                      { Header: "Delivered", accessor: "delivered" },
                      { Header: "Payment", accessor: "paymentMethod" },
                      { Header: "Products", accessor: "products" },
                      { Header: "Status", accessor: "status" },
                      { Header: "Total", accessor: "total" },
                  ],
                  rows: purchase_orders
              }}
          />
      </div>
  );
}

export default PurchaseOrders;
