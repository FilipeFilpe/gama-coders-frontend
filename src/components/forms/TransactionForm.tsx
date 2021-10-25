import { useEffect, useState } from "react";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from './TransactionForm.style'

interface TransactionFormProps {
    defaultValues?: TransactionValue
    setOpenForm: (balue: boolean) => void
}
interface TransactionValue {
    data?: Date
    valor?: number
    quantidade?: number
}
const useStyles = makeStyles(styles)

export default function TransactionForm(props: TransactionFormProps) {
    const classes = useStyles();
    const emptyTransaction = {
        data: new Date(),
        valor: 0,
        quantidade: 0
    }

    const [formValues, setFormValues] = useState<TransactionValue>(emptyTransaction)
    const [total, setTotal] =  useState<Number>(0)

    const changeValues = (event: any) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }
    const getCotation = (event: any) => {
        console.log('Buscando cotação', event.target.value);
    }
    
    const handleSubmit = () => {
        console.log(formValues);
    }

    useEffect(() => {
        if (Object.keys(props.defaultValues ?? {}).length > 0) {
            const transaction: TransactionValue = {
                data: props?.defaultValues?.data.replace('.000Z', ''),
                valor: props?.defaultValues?.cotacao,
                quantidade: props?.defaultValues?.total
            }            
            setFormValues(transaction)
        }
    }, [props.defaultValues])

    useEffect(() => {
        if (formValues?.quantidade && formValues?.valor) {
            setTotal(formValues.quantidade * formValues.valor)
        }
    }, [formValues.quantidade, formValues.valor])

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={6}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="data"
                    name="data"
                    label="Data da Cotação"
                    type="datetime-local"
                    fullWidth
                    variant="outlined"
                    value={formValues?.data ?? null}
                    InputLabelProps={{ shrink: true }}
                    onChange={(event) => changeValues(event)}
                    onBlur={(event) => getCotation(event)}
                />
            </Grid>            
            <Grid item xs={6}>
                <TextField
                    margin="dense"
                    id="valor"
                    name="valor"
                    label="Valor da Contação"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={formValues?.valor ?? 0}
                    InputLabelProps={{ shrink: true }}
                    onChange={changeValues}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    margin="dense"
                    id="quantidade"
                    name="quantidade"
                    label="Quantidade"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={formValues?.quantidade ?? 0}
                    InputLabelProps={{ shrink: true }}
                    onChange={changeValues}
                />
            </Grid>

            <Divider />
            
            <div className={classes.totalContainer} >
                <div className={classes.total}>
                    <span>Total</span>
                    <span>R$ {total}</span>
                </div>
            </div>

            <Divider />

            <Grid container item xs={12} justifyContent="flex-end">
                <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    onClick={() => props.setOpenForm(false)}
                >
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    style={{ background: 'var(--bg-primary)', color: 'white', marginLeft: '1rem' }}
                    onClick={handleSubmit}
                >
                    Salvar
                </Button>
            </Grid>
        </Grid>
    )
}
