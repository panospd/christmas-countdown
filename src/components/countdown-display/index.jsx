import React from "react";
import { CounterBox } from "../counter-box"
import "./style.css"

export function CountDownDisplay(props) {

    const { days, hours, minutes, seconds } = props

    const labelColor = "#FABC02"
    const valueColor = "#fff"

    const daysElement = <CounterBox
        labelColor={labelColor}
        valueColor={valueColor}
        label="Days"
        value={days} />

    const hoursElement = <CounterBox
        labelColor={labelColor}
        valueColor={valueColor}
        label="Hours"
        value={hours} />

    const minutesElement = <CounterBox
        labelColor={labelColor}
        valueColor={valueColor}
        label="Minutes"
        value={minutes} />

    const secondsElement = <CounterBox
        labelColor={labelColor}
        valueColor={valueColor}
        label="Seconds"
        value={seconds} />

    return (
        <React.Fragment>
            <div style={{ display: "flex", "flex-wrap": "wrap" }}>
                <div className="counter-box">{daysElement}</div>
                <div className="counter-box">{hoursElement}</div>
                <div className="counter-box">{minutesElement}</div>
                <div className="counter-box">{secondsElement}</div>
            </div>
        </React.Fragment>
    )
}