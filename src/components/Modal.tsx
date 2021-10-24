import { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/styles"
import ModalStyles from "./Modal.style"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core"

const useStyles = makeStyles(ModalStyles)
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

interface ModalInterface {
    open: boolean
    children: any
}
export default function Modal(props: ModalInterface) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    id="name"
                    label="Data da Cotação"
                    type="datetime-local"
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    )
}
