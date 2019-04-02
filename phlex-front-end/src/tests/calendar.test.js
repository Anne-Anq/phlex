import { getToday, getDateContext, weekDays, monthsArr, yearsArr, getWeeksInMonth, setDate, navigate } from "../logics/calendar";
import moment from "moment";

describe('get dates data', () => {
    it('should return an object containing all data about one date', () => {
        const myDate = moment("20190401");                      //this is moment.js date syntax for April 1st 2019
        expect(getDateContext(myDate)).toEqual({ "date": myDate, "day": "1", "daysInMonth": 30, "firstDayOfMonth": "1", "month": "April", "year": "2019" });
    });
    it('should return an object containing all data about today', () => {
        expect(getToday()).toEqual({ "date": moment(), "day": moment().format("D"), "daysInMonth": moment().daysInMonth(), "firstDayOfMonth": moment().startOf('month').format('d'), "month": moment().format("MMMM"), "year": moment().format("Y") });
    });
});

describe('get general calendar info such as weekdays, months and years', () => {
    it('should return an array containing all the weekdays', () => {
        expect(weekDays).toEqual(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
    });
    it('should return an array containing all the months', () => {
        expect(monthsArr).toEqual(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
    });
    it('should return an array containing all years between current year and 9 years from now', () => {
        expect(yearsArr).toEqual([2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028]);
    });
});

describe('return an array of arrays of the days of week starting on Sunday for a given month', () => {
    const today = getDateContext(moment("20190404"));
    const myDate = moment("20190401");
    const dateContext = getDateContext(myDate);
    const notAvailable = [
        {
            id: 1,
            from: "2019-04-15",
            to: "2019-04-15",
        },
        {
            id: 1,
            from: "2019-04-19",
            to: "2019-04-23",
        },
    ]
    it('should return an object with the empty slot properties for the first Sunday displayed for April 2019 as the month starts on Monday', () => {
        expect(getWeeksInMonth(today, dateContext, notAvailable)[0][0]).toEqual({ "className": "emptySlot", "content": "", "key": "empty-0" });
    });
    it('should return an object with the day properties for the first Monday displayed for April 2019 as the month starts on Monday', () => {
        expect(getWeeksInMonth(today, dateContext, notAvailable)[0][1]).toEqual({ "className": "day", "content": 1, "key": "full-1" });
    });
    it('should return an object with the current-day className for the date of "today"', () => {
        expect(getWeeksInMonth(today, dateContext, notAvailable)[0][4]).toEqual({ "className": "day current-day", "content": 4, "key": "full-4" });
    });
    it('should return an object with the booked className for the not-available dates, including from and to', () => {
        expect(getWeeksInMonth(today, dateContext, notAvailable)[2][1]).toEqual({ "className": "day booked", "content": 15, "key": "full-15" });
        expect(getWeeksInMonth(today, dateContext, notAvailable)[2][5]).toEqual({ "className": "day booked", "content": 19, "key": "full-19" });
        expect(getWeeksInMonth(today, dateContext, notAvailable)[3][0]).toEqual({ "className": "day booked", "content": 21, "key": "full-21" });
        expect(getWeeksInMonth(today, dateContext, notAvailable)[3][2]).toEqual({ "className": "day booked", "content": 23, "key": "full-23" });
    });
    it('should return an array of 5 arrays of the days of week starting on Sunday for the month of April', () => {
        expect(getWeeksInMonth(today, dateContext, notAvailable).length).toBe(5);
        expect(getWeeksInMonth(today, dateContext, notAvailable)[0].length).toBe(7);
    });
});
describe('get the date context of the selected month and year', () => {
    const aprilDateContext2019 = getDateContext(moment("20190409"));
    const mayDateContext2019 = getDateContext(moment("20190509"));
    const mayDateContext2021 = getDateContext(moment("20210509"));
    it('should return the date context of the selected month', () => {
        expect(setDate("month", "May", aprilDateContext2019)).toEqual(mayDateContext2019);
    });

    it('should return the date context of the selected year', () => {
        expect(setDate("year", 2021, mayDateContext2019)).toEqual(mayDateContext2021);
    });
});

describe('navigate to previous and next month and year', () => {

    it('should return the date context of the next month', () => {
        expect(navigate("nextMonth", getDateContext(moment("20190409")))).toEqual(getDateContext(moment("20190509")));
    });
    it('should return the date context of the previous month', () => {
        expect(navigate("prevMonth", getDateContext(moment("20190409")))).toEqual(getDateContext(moment("20190309")));
    });
    it('should return the date context of the next year', () => {
        expect(navigate("nextYear", getDateContext(moment("20190409")))).toEqual(getDateContext(moment("20200409")));
    });
    it('should return the date context of the previous year', () => {
        expect(navigate("prevYear", getDateContext(moment("20190409")))).toEqual(getDateContext(moment("20180409")));
    });

});

// const getNextMonth = (dateContext) => {
//     const { date } = Object.assign({}, dateContext);
//     return getDateContext(moment(date).add(1, "month"));
// }
// const getPrevMonth = (dateContext) => {
//     const { date } = Object.assign({}, dateContext);
//     return getDateContext(moment(date).subtract(1, "month"));
// }
// const getNextYear = (dateContext) => {
//     const { date } = Object.assign({}, dateContext);
//     return getDateContext(moment(date).add(1, "year"));
// }
// const getPrevYear = (dateContext) => {
//     const { date } = Object.assign({}, dateContext);
//     return getDateContext(moment(date).subtract(1, "year"));
// }

// const navigate = (action, dateContext) => {
//     if (action === "nextMonth") return getNextMonth(dateContext);
//     if (action === "prevMonth") return getPrevMonth(dateContext);
//     if (action === "nextYear") return getNextYear(dateContext);
//     if (action === "prevYear") return getPrevYear(dateContext);
// };