import { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/styles"
import ModalStyles from "./Modal.style"
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core"

const useStyles = makeStyles(ModalStyles)

interface ModalProps {
    title: string
    open: boolean
    children: any
    footer?: any
}
export default function Modal(props: ModalProps) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent style={{overflow: 'hidden'}}>
                { props.children }
            </DialogContent>
            <DialogActions>
                { props?.footer }
            </DialogActions>
        </Dialog>
    )
}
