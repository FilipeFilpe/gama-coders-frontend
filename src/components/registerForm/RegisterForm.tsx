import { useState } from 'react'
import { Grid, Box, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import RegisterFormStyles from './Registerform.style'

const useStyles = makeStyles(RegisterFormStyles)

interface UserValue {
  username: string
  email: string
  password: string
}

export default function RegisterForm() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState<UserValue>({
    username: '',
    email: '',
    password: ''
  })

  const changeValues = (event: any) => {
    setFormValues({...formValues, [event.target.name]: event.target.value})
  }

  async function handleSubmit(): Promise<void> {
    // TO DO
  }

  return (
    <Grid item style={{ width:'100%',}}>
      <Box className={classes.root}>
        <TextField 
          margin='dense' 
          name="username" 
          id="usernamefield" 
          label="Nome" 
          variant="standard" 
          value={formValues.username}
          className={classes.value}
          onChange={(event) => changeValues(event)}
        />
      </Box>
      <Box className={classes.root}>
        <TextField 
          margin='dense' 
          name="email" 
          id="emailField" 
          label="Email" 
          type="email"
          variant="standard"
          value={formValues.email}
          className={classes.value}
          onChange={(event) => changeValues(event)}
        />
      </Box>
      <Box className={classes.root}>
        <TextField 
          margin='dense' 
          name="password" 
          id="passwordfield" 
          label="Senha" 
          variant="standard" 
          type='password'
          value={formValues.password}
          className={classes.value}
          onChange={(event) => changeValues(event)}
        />
      </Box>
      <Box className={classes.root}>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={() => handleSubmit()}
          style={{background: 'var(--bg-primary)', width:'40%', marginTop: '2rem'}}
        >
          Criar conta
        </Button>
      </Box>
    </Grid>
  )
}