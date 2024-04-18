import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../../components/DataTable';
import { Typography, Button } from '@mui/material';

function Inventories() {
  const [inventories, setInventories] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchInventories();
  }, [page]);

  const fetchInventories = async () => {
    try {
      const response = await axios.get(`http://3.145.98.75:1913/api/inventories?page=${page}`);
      setInventories(response.data.content);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
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
      <div>
        <Button onClick={handlePrevPage} variant="contained" color="primary" style={{ color: 'white' }} disabled={page === 0}>Previous Page</Button>
        <Button onClick={handleNextPage} variant="contained" color="primary" style={{ color: 'white' }}>Next Page</Button>
      </div>
    </div>
  );
}

export default Inventories;
