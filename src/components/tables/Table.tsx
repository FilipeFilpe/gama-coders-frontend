import { IconButton } from '@material-ui/core';
import { DeleteRounded as DeleteBtn, EditRounded as EditBtn  } from '@material-ui/icons';
import { DataGrid, GridCellParams, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    {
        field: 'data',
        headerName: 'Data',
        width: 130
    },
    {
        field: 'cotacao',
        headerName: 'Cotação',
        width: 150
    },
    {
        field: 'compra',
        headerName: 'Compra',
        width: 150
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 110
    },
    {
        field: 'acoes',
        headerName: 'Ações',
        width: 110,
        renderCell: (params: GridCellParams) => {
            return <>
                <IconButton aria-label="edit">
                    <EditBtn color="primary" />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteBtn color="error" />
                </IconButton>
            </>
        }        
    }
];

const rows = [
    { id: 1, data: '10/05/21', cotacao: 'R$ 155.110,10', compra: '0.00055 BTC', total: 'R$ 575,77' },
    { id: 2, data: '10/05/21', cotacao: 'R$ 155.110,10', compra: '0.00055 BTC', total: 'R$ 575,77' },
    { id: 3, data: '10/05/21', cotacao: 'R$ 155.110,10', compra: '0.00055 BTC', total: 'R$ 575,77' },
    { id: 4, data: '10/05/21', cotacao: 'R$ 155.110,10', compra: '0.00055 BTC', total: 'R$ 575,77' },
    { id: 5, data: '10/05/21', cotacao: 'R$ 155.110,10', compra: '0.00055 BTC', total: 'R$ 575,77' },
    { id: 6, data: '10/05/21', cotacao: 'R$ 155.110,10', compra: '0.00055 BTC', total: 'R$ 575,77' },
    { id: 7, data: '10/05/21', cotacao: 'R$ 155.110,10', compra: '0.00055 BTC', total: 'R$ 575,77' },
];

export default function Table() {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={15}
        />
    );
}
