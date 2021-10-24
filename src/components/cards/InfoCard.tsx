import {Card, CardContent, Typography,} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CardStyles from './InfoCard.style';

const useStyles = makeStyles(CardStyles)

interface InfoCardProps {
    title: string
    value: any,
    type?: 'default' | 'primary' | 'success' | 'warning' | 'error'
}
export default function InfoCard(props: InfoCardProps) {
    const classes = useStyles();
    return (
        <Card className={classes.root} style={{background: `var(--bg-${props.type ?? 'default'})`}}>
            <CardContent>
                <Typography className={classes.title} variant="h6">
                    { props.title }
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    className={classes.value}
                >
                    { props.value }
                </Typography>
            </CardContent>
        </Card>
    );
}