import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import data from '../Data/googlereviews.json'

const columns= [
 { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'App',
    headerName: 'app',
    width: 70,
    editable: true,
  },
  {
    field: 'Translated_Review',
    headerName: 'translated_Review',
    width: 260,
    editable: true,
  },
];

 const rows = data;


export default function DataGridDemo() {
  return (
    <Box sx={{ height: 320, width: 350 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
        
      />
    </Box>
  );
}