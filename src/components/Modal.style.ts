import { createStyles } from "@material-ui/styles";

const ModalStyles = createStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        background: 'var(--bg-default)',
        border: 0,
        borderRadius: 10,
        boxShadow: '5px 5px 10px 0px #d1d1d1',
        color: 'white',
        padding: '0 1rem',
        '& h6, div': {
            color: 'white'
        }
    },
    value: {
        width: '100%',
        textAlign: 'end'
    }
})

export default ModalStyles
