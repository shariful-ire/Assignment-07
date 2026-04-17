'use client';

import { friendContext } from '@/app/contextAPI/friendContext';
import { useContext } from 'react';
import { Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from 'recharts';



export default function PieChart({ isAnimationActive = true }) {

    const { interaction } = useContext(friendContext);
    console.log("Interaction:", interaction);

    const callCount = interaction.filter(item => item.type === 'Call').length;
    const smsCount = interaction.filter(item => item.type === 'SMS').length;
    const videoCallCount = interaction.filter(item => item.type === 'Video Call').length;

    // #region Sample data
    const data = [
        { name: 'Calls', value: callCount, fill: '#244D3F' },
        { name: 'SMS', value: smsCount, fill: '#7E35E1' },
        { name: 'Video Calls', value: videoCallCount, fill: '#37A163' },
    ];

    // #endregion { width: '100%', maxWidth: '400px', height: '450px' }
    return (
        <div className='w-full max-w-100 md:h-112 h-80'>
            <ResponsiveContainer width="100%" height="100%" aspect={1}>
                <RechartsPieChart>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        cornerRadius="50%"
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={isAnimationActive}
                    />
                    <Tooltip />
                </RechartsPieChart>
            </ResponsiveContainer>
        </div>
    );
}
