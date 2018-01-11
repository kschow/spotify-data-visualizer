import React from 'react'
import './SpotifyVisualizationArea.css'
import ControlActionsContainer from './ControlActions/container'
import { ScatterChart, XAxis, YAxis, ZAxis, Tooltip, Scatter, Legend } from 'recharts'

const SpotifyVisualizationArea = ({ xAxis, yAxis, tracks }) => (
    <div>
        {
            tracks !== undefined ?
                <div>
                    <ControlActionsContainer/>
                    <ScatterChart width={500} height={300} className="Center-Block">
                        <XAxis dataKey={xAxis} type="number"/>
                        <YAxis dataKey={yAxis} type="number"/>
                        <ZAxis dataKey="name" type="category"/>
                        <Tooltip isAnimationActive={false}/>
                        <Scatter data={tracks}/>
                    </ScatterChart>
                </div> :
            null
        }
    </div>
);

export default SpotifyVisualizationArea;
