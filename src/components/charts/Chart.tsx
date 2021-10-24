import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart as ChartMT,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

interface ChartProps {
    data: object[]
}
export default function Chart(props: ChartProps) {
    return (
        <Paper>
            <ChartMT
                data={props?.data ?? []}
            >
                <ArgumentAxis />
                <ValueAxis />

                <LineSeries valueField="value" argumentField="argument" />
            </ChartMT>
        </Paper>
    )
}
