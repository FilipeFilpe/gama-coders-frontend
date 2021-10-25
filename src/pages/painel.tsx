import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Container, Grid } from '@material-ui/core'

import InfoCard from '../components/cards/InfoCard'
import Modal from '../components/modals/Modal'
import Chart from '../components/charts/Chart'
import TransactionForm from '../components/forms/TransactionForm'
import Table from '../components/tables/Table'

const data = [
  { argument: 1, value: 5 },
  { argument: 2, value: 2 },
  { argument: 3, value: 5 },
  { argument: 4, value: 5 },
  { argument: 5, value: 8 },
];
const Home: NextPage = () => {
  const [openForm, setOpenForm] = useState(false)

  return (
    <Container>
      <Head>
        <title>Meus Bitcons</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={8}>
          <h1>Bem vindo!</h1>
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent="flex-end"
        >
          <Button
            variant="contained"
            size="large"
            style={{ background: 'var(--bg-primary)', color: 'white' }}
            onClick={() => setOpenForm(!openForm)}
          >
            Nova Transação
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <InfoCard
            title="Total Investido"
            value="R$ 11.501,55"
            type="error"
          />
        </Grid>
        <Grid item xs={3}>
          <InfoCard
            title="Rendimento"
            value="R$ 985,75"
            type="success"
          />
        </Grid>
        <Grid item xs={3}>
          <InfoCard
            title="% de Retorno"
            value="8,57 %"
            type="primary"
          />
        </Grid>
        <Grid item xs={3}>
          <InfoCard
            title="Cotação Atual"
            value="R$ 346.589,37"
            type="warning"
          />
        </Grid>

        <Grid item xs={6}>
          <Chart data={data} />
        </Grid>

        <Grid item xs={6}>
          <Table />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Modal
            title="Nova Transação"
            open={openForm}
          >
            <TransactionForm setOpenForm={setOpenForm}/>
          </Modal>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
