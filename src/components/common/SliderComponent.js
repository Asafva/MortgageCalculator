import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';
export const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
    return (
        <Stack my={1.4}>
            <Stack gap={1}>
                <Typography variant='h5'> {amount} {unit}</Typography>
                <Typography variant='subtitle2'> {label} </Typography>

            </Stack>

            <Slider
                defaultValue={defaultValue}
                min={min}
                max={max}
                step={step}
                marks
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={onChange}
                value={value}
            />
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant='caption' color='text.secondary'>{unit}{min}</Typography>
                <Typography variant='caption' color='text.secondary'>{unit}{max}</Typography>
            </Stack>

        </Stack>
    )
}
