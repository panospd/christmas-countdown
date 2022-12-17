export const xmasCalculator = () => {
    const currentYear = getCurrentYear()
    const nextChristmasDatetime = new Date(currentYear, 11, 25, 0, 0, 0, 0);
    return calculate(nextChristmasDatetime);
}

export const newYearCalculator = () => {
    const currentYear = getCurrentYear()
    const nextChristmasDatetime = new Date(currentYear, 11, 31, 0, 0, 0, 0);
    return calculate(nextChristmasDatetime);
}

const getCurrentYear = () => new Date().getFullYear();

const calculate = (date_future) => {

    const date_now = Date.now()

    let delta = Math.abs(date_future - date_now) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    const seconds = Math.round(delta % 60);

    return { days, hours, minutes, seconds };
}