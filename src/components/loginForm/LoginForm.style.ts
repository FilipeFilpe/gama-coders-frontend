import { createStyles } from "@material-ui/styles";

const LoginFormStyles = createStyles({
    root: {
      width: '100%',
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1rem'
    },
    value: {
      width: '50%',
    },
    click: {
      color: '#002CF0',
      cursor: 'pointer',
      fontWeight: 'bolder'
    }
})

export default LoginFormStyles
