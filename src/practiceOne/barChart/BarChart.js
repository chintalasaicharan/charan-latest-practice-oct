import React from 'react'
import { Bar } from 'react-chartjs-2'

// import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip } from 'chart.js'
// Chart.register(LinearScale, CategoryScale, BarElement,Legend, Title, Tooltip)
// ----------------short cut------------------------

import { Chart } from 'chart.js/auto'

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const options = {
    plugins: {
        legend: { position: 'top' },
        title: { display: 'true', text: 'Expense Tracker' }
    }
}
const data = {
    labels,
    datasets: [
        {
            label: '2020 Expense',
            data: [10000, 9000, 8000, 10200, 11000, 13500, 14300, 14800, 12300, 13700, 11800, 10600],
            backgroundColor: 'pink'
        },
        {
            label: '2021 Expense',
            data: [17000, 15000, 12000, 10800, 12000, 14500, 14000, 11000, 11300, 12300, 12800, 10000],
            backgroundColor: 'grey'
        }
    ]
}
const BarCharts = () => {
    return (
        <div >
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarCharts