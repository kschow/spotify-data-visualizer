import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import { MARGINS } from './util'

function VizBar(props) {
    return <div>
        <BarChart width={500} height={300} margin={MARGINS} className="Center-Block" data={props.data}>
            <XAxis dataKey="display" />
            <YAxis />
            <Tooltip isAnimationActive={false} />
            <Bar dataKey="count" />
        </BarChart>
    </div>;
}

export default VizBar;