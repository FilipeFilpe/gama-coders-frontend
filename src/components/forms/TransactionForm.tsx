import { useEffect, useState } from "react";
import { Button, Divider, Grid, TextField } from "@material-ui/core";

interface TransactionFormProps {
    defaultValues?: {}
    setOpenForm: (balue: boolean) => void
}
interface TransactionValue {
    data?: Date
    valor?: number
    quantidade?: number

}
export default function TransactionForm(props: TransactionFormProps) {
    const [formValues, setFormValues] = useState<TransactionValue>({})

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
        console.log('props',props?.defaultValues);
        
        if (Object.keys(props.defaultValues ?? {}).length > 0) {
            setFormValues(props?.defaultValues ?? {})
        }
    }, [props.defaultValues])

    return (
        <Grid container spacing={3}>
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
            
            <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1rem'
            }}
            >
                <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '1rem'
                    }}
                >
                    <span>Total</span>
                    <span>R$ 575,55</span>
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
