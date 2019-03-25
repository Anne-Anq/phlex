import moment from "moment";
import _ from "lodash";

const getDateContext = (myDate) => {
    return {
        date: myDate,
        day: myDate.format("D"),
        year: myDate.format("Y"),
        month: myDate.format("MMMM"),
        daysInMonth: myDate.daysInMonth(),
        firstDayOfMonth: moment(myDate).startOf('month').format('d'),
    }
}

const getToday = () => getDateContext(moment());

const weekDays = moment.weekdaysShort();

const monthsArr = moment.months();

const yearsArr = _.range(moment().format("Y"), Number(moment().format("Y")) + 10);

const getPrevMonthDays = ({ firstDayOfMonth }) => {
    let prevMonthDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        prevMonthDays.push({ key: `empty-${i}`, className: "emptySlot", content: "" })
    }
    return prevMonthDays
}
const getCurrentMonthDays = (todaysDate, { daysInMonth, month, year }, notAvailable) => {
    let currentMonthDays = [];
    for (let d = 1; d <= daysInMonth; d++) {
        const dDate = moment().date(d).month(month).year(year);
        let className = d === parseInt(todaysDate, 10) ? "day current-day" : "day";
        notAvailable.forEach(obj => {
            const dFrom = moment(obj.from);
            const dTo = moment(obj.to);
            if (!(dDate.isBefore(dFrom) || dDate.isAfter(dTo))) {
                className = "day booked";
            }
        })
        currentMonthDays.push({ key: `full-${d}`, className: className, content: d });
    }
    return currentMonthDays;
}

const getDaysInMonthArr = (today, dateContext, notAvailable) => {
    let daysInMonthArr = [...getPrevMonthDays(dateContext), ...getCurrentMonthDays(today.date, dateContext, notAvailable)];
    return daysInMonthArr;
}

const getWeeksInMonth = (today, dateContext, notAvailable) => {
    const daysInMonthArr = getDaysInMonthArr(today, dateContext, notAvailable);
    const weeksInMonthArr = [];
    let week = [];
    daysInMonthArr.forEach((day, i) => {
        if (i === 0 || (i % 7) !== 0) {
            week.push(day);
        } else {
            let insertRow = week.slice();
            weeksInMonthArr.push(insertRow);
            week = [];
            week.push(day);
        }
        if (i === daysInMonthArr.length - 1) {
            let insertRow = week.slice();
            weeksInMonthArr.push(insertRow);
        }
    })
    return weeksInMonthArr;
}


const setYear = (year, dateContext) => {
    const { date } = Object.assign({}, dateContext);
    return getDateContext(moment(date).set("year", year));
}
const setMonth = (month, dateContext) => {
    const { date } = Object.assign({}, dateContext);
    return getDateContext(moment(date).set("month", month));
}
const setDate = (param, value, dateContext) => {
    if (param === "month") return setMonth(value, dateContext);
    if (param === "year") return setYear(value, dateContext);
}

const getNextMonth = (dateContext) => {
    const { date } = Object.assign({}, dateContext);
    return getDateContext(moment(date).add(1, "month"));
}
const getPrevMonth = (dateContext) => {
    const { date } = Object.assign({}, dateContext);
    return getDateContext(moment(date).subtract(1, "month"));
}
const getNextYear = (dateContext) => {
    const { date } = Object.assign({}, dateContext);
    return getDateContext(moment(date).add(1, "year"));
}
const getPrevYear = (dateContext) => {
    const { date } = Object.assign({}, dateContext);
    return getDateContext(moment(date).subtract(1, "year"));
}

const navigate = (action, dateContext) => {
    if (action === "nextMonth") return getNextMonth(dateContext);
    if (action === "prevMonth") return getPrevMonth(dateContext);
    if (action === "nextYear") return getNextYear(dateContext);
    if (action === "prevYear") return getPrevYear(dateContext);
};


export { getToday, getDateContext, weekDays, getWeeksInMonth, setDate, navigate, monthsArr, yearsArr };