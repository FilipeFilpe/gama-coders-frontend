import type { NextPage } from 'next'
import { Grid } from '@material-ui/core'
import { LeftImageLogin } from '../components/leftImageLogin/leftImageLogin'
import { LoginForm } from '../components/loginForm/LoginForm'

const LoginPage : NextPage = () => {
  return (
    <Grid container style={{minHeight: '100vh'}}>
      <Grid item xs={12} sm={6}>
        <LeftImageLogin />
      </Grid>
      <Grid container item xs={12} sm={6} style={{padding: 10}}>
        <LoginForm />
      </Grid>
    </Grid>
  )
}

export default LoginPage