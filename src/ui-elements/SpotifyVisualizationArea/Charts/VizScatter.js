import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip } from 'recharts'
import { MARGINS } from './util'

function VizScatter(props) {
    return <div>
        <ScatterChart width={500} height={300} margin={MARGINS} className="Center-Block">
            <XAxis dataKey={props.xAxis} type="number" />
            <YAxis dataKey={props.yAxis} type="number" />
            <ZAxis dataKey="name" type="category" />
            <Tooltip isAnimationActive={false} />
            <Scatter data={props.data} />
        </ScatterChart>
    </div>;
}

export default VizScatter;