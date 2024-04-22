import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';

const DataTable = ({ columns, rows }) => {
    const [filterModel, setFilterModel] = React.useState({
        items: [],
        quickFilterExcludeHiddenColumns: true,
        // quickFilterValues: ['1'],
    });

    const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});

    return (
        <Box sx={{ width: 1 }}>
            <FormControlLabel
                checked={columnVisibilityModel.id !== false}
                onChange={(event) =>
                    setColumnVisibilityModel(() => ({ id: event.target.checked }))
                }
                control={<Switch color="primary" />}
                label="Show ID column"
            />
            <FormControlLabel
                checked={filterModel.quickFilterExcludeHiddenColumns}
                onChange={(event) =>
                    setFilterModel((model) => ({
                        ...model,
                        quickFilterExcludeHiddenColumns: event.target.checked,
                    }))
                }
                control={<Switch color="primary" />}
                label="Exclude hidden columns"
            />
            <Box sx={{ height: 400 }}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    disableColumnFilter
                    disableDensitySelector
                    slots={{ toolbar: GridToolbar }}
                    filterModel={filterModel}
                    onFilterModelChange={(newModel) => setFilterModel(newModel)}
                    slotProps={{ toolbar: { showQuickFilter: true } }}
                    columnVisibilityModel={columnVisibilityModel}
                    onColumnVisibilityModelChange={(newModel) =>
                        setColumnVisibilityModel(newModel)
                    }
                />
            </Box>
        </Box>
    )
}

export default DataTable