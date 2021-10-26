import { IconButton } from '@material-ui/core';
import { DeleteRounded as DeleteBtn, EditRounded as EditBtn  } from '@material-ui/icons';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { convertCurrent, dateFormatter } from '../../uteis/helpers';

interface TableInterface {
    values: [],
    editCallback?: () => void,
    deleteCallback?: () => void
}
export default function Table(props: TableInterface) {
    const columns: GridColDef[] = [
        {
            field: 'data',
            headerName: 'Data',
            width: 150,
            renderCell: (params: GridCellParams) => {
                if(!params.row.data) return ''
                return <>{dateFormatter(params.row.data)}</>
            }
        },
        {
            field: 'cotacao',
            headerName: 'Cotação',
            width: 150,
            align: 'right',
            renderCell: (params: GridCellParams) => <>{convertCurrent(params.row.cotacao)}</>
        },
        {
            field: 'compra',
            headerName: 'Compra',
            width: 150,
            align: 'right'
        },
        {
            field: 'total',
            headerName: 'Total',
            width: 150,
            align: 'right',
            renderCell: (params: GridCellParams) => <>{convertCurrent(params.row.total)}</>
        },
        {
            field: 'acoes',
            headerName: 'Ações',
            width: 150,
            renderCell: (params: GridCellParams) => {
                return <>
                    <IconButton aria-label="edit" onClick={() => props.editCallback(params.row)}>
                        <EditBtn color="primary" />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => props.deleteCallback(params.row)}>
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
            autoHeight
        />
    );
}
