import { IconButton } from '@material-ui/core';
import { DeleteRounded as DeleteBtn, EditRounded as EditBtn  } from '@material-ui/icons';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { useRouter } from 'next/dist/client/router';


interface TableInterface {
    values: [],
    editCallback?: () => void
}
export default function Table(props: TableInterface) {
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
                    <IconButton aria-label="edit" onClick={() => props.editCallback(params.row)}>
                        <EditBtn color="primary" />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteBtn color="error" />
                    </IconButton>
                </>
            }        
        }
    ];
    return (
        <DataGrid
            rows={props.values ?? []}
            columns={columns}
            pageSize={15}
        />
    );
}
