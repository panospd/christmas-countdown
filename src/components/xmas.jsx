import React, { useEffect, useState } from "react";
import { xmasCalculator } from "../utils/datetime-subtractor"
import { CountDownDisplay } from "./countdown-display";

export function Xmas(props) {
    const [countDown, setCountDown] = useState(xmasCalculator())

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(xmasCalculator())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <React.Fragment>
            <h1>Merry Christmas!!!</h1>
            <CountDownDisplay
                days={countDown.days}
                hours={countDown.hours}
                minutes={countDown.minutes}
                seconds={countDown.seconds} />
        </React.Fragment>
    )
}