import { useEffect, useState } from "react";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from './TransactionForm.style'
import apiBtc, { apiCotation } from "../../services/apiBtc";
import useLoading from "../../hook/useLoading";
import { convertCurrent } from "../../uteis/helpers";

interface TransactionFormProps {
    defaultValues?: TransactionValue
    setOpenForm: (balue: boolean) => void
}
interface TransactionValue {
    id?: number
    data?: Date
    cotacao?: number
    quantidade?: number
}
const useStyles = makeStyles(styles)

export default function TransactionForm(props: TransactionFormProps) {
    const classes = useStyles();    
    const {loading, handleLoading} = useLoading()

    const emptyTransaction = {
        data: new Date(),
        cotacao: 0,
        quantidade: 0
    }

    const [formValues, setFormValues] = useState<TransactionValue>(emptyTransaction)
    const [total, setTotal] =  useState<Number>(0)

    const changeValues = (event: any) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }
    const getCotation = (event: any) => {
        // 1800 é 30 min
        handleLoading && handleLoading(true)
        const convertToUnixTimestamp = (value: any) => Math.floor(new Date(value).getTime()/1000.0)
        const unixTimestampValue: number = convertToUnixTimestamp(event.target.value)

        const params = {
            vs_currency: 'brl',
            from: unixTimestampValue-1800,
            to: unixTimestampValue
        }
        apiCotation.get('coins/bitcoin/market_chart/range', {params})
            .then((response: any) => {
                if (response.data.prices.length > 0) {
                    const [_, price] = response.data.prices[0]
                    setFormValues({...formValues, cotacao: price})
                }
            })
            .finally(() => handleLoading && handleLoading(false))
    }
    
    const handleSubmit = async () => {
        handleLoading && handleLoading(true)
        const dataToSave = {
            transaction_date: formValues.data,
            quantity: formValues.quantidade,
            value_buy: formValues.cotacao
        }
        const id: any = props.defaultValues?.id
        await apiBtc[!!id ? 'put' : 'post'](`/transaction${!!id ? '/'+id: ''}`, dataToSave)
            .finally(() => {
                if (handleLoading) {
                    handleLoading(false)
                    props.setOpenForm(false)
                }
            })
    }

    useEffect(() => {
        if (Object.keys(props.defaultValues ?? {}).length > 0) {
            const transaction: TransactionValue = {
                data: props?.defaultValues?.data ? props?.defaultValues?.data.replace('.000Z', '') : null,
                cotacao: props?.defaultValues?.cotacao,
                quantidade: props?.defaultValues?.quantidade
            }            
            setFormValues(transaction)
        }
    }, [props.defaultValues])

    useEffect(() => {
        if (formValues?.quantidade && formValues?.cotacao) {
            setTotal(formValues.quantidade * formValues.cotacao)
        }
    }, [formValues.quantidade, formValues.cotacao])

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
                    disabled={loading}
                />
            </Grid>            
            <Grid item xs={6}>
                <TextField
                    margin="dense"
                    id="cotacao"
                    name="cotacao"
                    label="Valor da Cotação"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={formValues?.cotacao ?? 0}
                    InputLabelProps={{ shrink: true }}
                    onChange={changeValues}
                    disabled={loading}
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
                    disabled={loading}
                />
            </Grid>

            <Divider />
            
            <div className={classes.totalContainer} >
                <div className={classes.total}>
                    <span>Total</span>
                    <span>{convertCurrent(total)}</span>
                </div>
            </div>

            <Divider />

            <Grid container item xs={12} justifyContent="flex-end">
                <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    onClick={() => props.setOpenForm(false)}
                    disabled={loading}
                >
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    style={{ background: 'var(--bg-primary)', color: 'white', marginLeft: '1rem' }}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    Salvar
                </Button>
            </Grid>
        </Grid>
    )
}
