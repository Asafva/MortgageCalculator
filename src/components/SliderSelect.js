import React, { Fragment } from 'react'
import { SliderComponent } from './common/SliderComponent'

export const SliderSelect = ({ data, setData }) => {
    return (
        <Fragment>
            <SliderComponent
                label="Home Value"
                min={1000}
                max={10000}
                defaultValue={data.homeValue}
                value={data.homeValue}
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    homeValue: value,
                    downPayment: value * 0.2,
                    loanAmount: value * 0.8
                })}
                unit="$"
                amount={data.homeValue}
            />
            <SliderComponent
                label="Down Payment"
                min={0}
                max={data.homeValue}
                defaultValue={data.downPayment}
                value={data.downPayment}
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    loanAmount: (data.homeValue - value),
                    downPayment: value
                })}
                unit="$"
                amount={data.downPayment}
            />
            <SliderComponent
                label="Loan Amount"
                min={0}
                max={data.homeValue}
                defaultValue={data.loanAmount}
                value={data.loanAmount}
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment: (data.homeValue - value),
                    loanAmount: value
                })}
                unit="$"
                amount={data.loanAmount}
            />
            <SliderComponent
                label="Intrest Rate"
                min={2}
                max={18}
                defaultValue={data.intrestRate}
                value={data.intrestRate}
                step={1}
                onChange={(e, value) => setData({
                    ...data,
                    intrestRate: value
                })}
                unit="%"
                amount={data.intrestRate}
            />
        </Fragment>
    )
}
