import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const Result = ({ data }) => {
    const { homeValue, downPayment, loanAmount, loanTerm, intrestRate } = data;
    const totalLoanMonths = loanTerm * 12;  //60m monthes = 5 years
    const intrestPerMonth = intrestRate / 100 / 12; // 100$ for 12% in 1 year
    const monthlyPayment =
        (loanAmount *
            intrestPerMonth *
            (1 + intrestPerMonth) ** totalLoanMonths) /
        ((1 + intrestPerMonth) ** totalLoanMonths - 1)

    const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount

    const pieChartData = {
        labels: ['Principle', 'Intrest'],
        datasets: [
            {
                label: 'Ratio of Principle and Intrest ',
                data: [homeValue, totalInterestGenerated],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Stack gap={3}>
            <Typography textAlign='center' variant='h5'>
                Monthly Payment: $ {monthlyPayment.toFixed(2)}
            </Typography>
            <Stack direction='row' justifyContent='center'>
                <div>
                    <Pie data={pieChartData} />
                </div>

            </Stack>

        </Stack>
    )
}
