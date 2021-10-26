import { createStyles } from "@material-ui/styles";

const TransactionForm = createStyles({
    root: {
    },
    totalContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1rem'
    },
    total: {
        minWidth: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1rem',
        boxShadow: '5px 5px 10px 0 #d1d1d1',
        borderRadius: '10px',
        '& > span:first-child': {
            fontSize: '2rem'
        },
        '& > span:last-child': {
            fontSize: '3rem'
        }
    }
})

export default TransactionForm
