import React from "react";
import { CounterBox } from "./counter-box"

export function CountDownDisplay(props) {
    const childStyle = {
        flex: "1 0 21 %",
        margin: "0 25px",
        height: "100px",
        backgroundCcolor: "blue"
    }

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
                <div style={childStyle}>{daysElement}</div>
                <div style={childStyle}>{hoursElement}</div>
                <div style={childStyle}>{minutesElement}</div>
                <div style={childStyle}>{secondsElement}</div>
            </div>
        </React.Fragment>
    )
}