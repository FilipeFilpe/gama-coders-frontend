import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import LoginFormStyles from './LoginForm.style'
import Modal from '../modals/Modal'
import RegisterForm from '../registerForm/RegisterForm'

const useStyles = makeStyles(LoginFormStyles)

export const LoginForm = () => {
  const classes = useStyles()
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ openForm, setOpenForm ] = useState(false)

  function handleChange(event: any): void{
    const targetName = event.target.name
    const targetValue = event.target.value

    if(targetName === 'email') {
      setEmail(targetValue)
    }else {
      setPassword(targetValue)
    }
  }

  function handleSubmit(values: string) {
    //TO DO
  }

  return (
    <Grid container justifyContent='center' alignItems='center' direction='column'>
        <Grid item>
          <Typography variant='h4' style={{marginBottom: '1rem'}}>Entre na sua conta ou registre-se!</Typography>
        </Grid>
        <Grid item style={{ width:'100%',}}>
          <Box className={classes.root}>
            <TextField 
              margin='dense' 
              name="email" 
              id="emailField" 
              label="Email" 
              type="email"
              className={classes.value}
              variant="standard"
              value={email}
              onChange={(event) => handleChange(event)}
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
              className={classes.value}
              value={password}
              onChange={(event) => handleChange(event)}
            />
          </Box>
          <Box className={classes.root}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              style={{background: 'var(--bg-primary)', width:'40%', marginTop: '1rem'}}
            >
              Entrar
            </Button>
          </Box>
          <Box className={classes.root}>
            <Typography variant='h6' style={{marginBottom: '1rem'}}>Ainda não tem conta? Clique <a className={classes.click} onClick={() => setOpenForm(!openForm)}>Aqui</a> e crie agora mesmo!</Typography>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Modal
                title="Cadastrar usuário"
                open={openForm}
              >
                <RegisterForm />
              </Modal>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
} 
