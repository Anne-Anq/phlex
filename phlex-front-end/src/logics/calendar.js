import moment from "moment";
import _ from "lodash";

const getDateContext = (myDate) => {
    return {
        date: moment(myDate),
        day: moment(myDate).format("D"),
        year: moment(myDate).format("Y"),
        month: moment(myDate).format("MMMM"),
        daysInMonth: moment(myDate).daysInMonth(),
        firstDayOfMonth: moment(myDate).startOf('month').format('d'),
    }
}

const getToday = () => getDateContext(moment());

const getDay = (year, month, day) => moment(`${year}-${moment().month(month).format("MM")}-${moment().day(day).format("DD")}`).startOf('day');

const compareDates = (date1, date2) => date1.isSame(date2, "day") && date1.isSame(date2, "month") && date1.isSame(date2, "year");

const weekDays = moment.weekdaysShort();

const monthsArr = moment.months();

const yearsArr = _.range(moment().format("Y"), Number(moment().format("Y")) + 10);

const getPrevMonthDays = ({ firstDayOfMonth }) => {
    let prevMonthDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        prevMonthDays.push({ key: `empty-${i}`, className: "day emptySlot", content: "" })
    }
    return prevMonthDays
}
const getCurrentMonthDays = (todaysDate, { daysInMonth, month, year }, notAvailable, selectedDates) => {
    let currentMonthDays = [];
    for (let d = 1; d <= daysInMonth; d++) {
        const dDate = getDay(year, month, d);
        let className = compareDates(dDate, todaysDate) ? "day current-day" : "day"; // fix this
        notAvailable.forEach(obj => {
            const dFrom = moment(obj.from);
            const dTo = moment(obj.to);

            if (!(dDate.isBefore(dFrom) || dDate.isAfter(dTo))) {
                className = `${className} booked`;
            }
        })
        selectedDates.forEach(sDate => className = `${className} ${compareDates(sDate.date, dDate) ? "selected" : ""}`)
        currentMonthDays.push({ key: `full-${d}`, className: className, content: d });
    }
    return currentMonthDays;
}

const getDaysInMonthArr = (today, dateContext, notAvailable, selectedDates) => {
    let daysInMonthArr = [...getPrevMonthDays(dateContext), ...getCurrentMonthDays(today.date, dateContext, notAvailable, selectedDates)];
    return daysInMonthArr;
}

const getWeeksInMonth = (today, dateContext, notAvailable, selectedDates) => {
    const daysInMonthArr = getDaysInMonthArr(today, dateContext, notAvailable, selectedDates);
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
    let { date } = Object.assign({}, dateContext);
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


export {
    getToday, getDateContext, weekDays, getWeeksInMonth, setDate, navigate, monthsArr, yearsArr, getDay
};