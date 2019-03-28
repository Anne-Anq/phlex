import { getToday, getDateContext, weekDays, getWeeksInMonth, setDate, navigate, monthsArr, yearsArr } from "../logics/calendar";
import moment from "moment";

describe('get dates data', () => {
    it('should return an object containing all data bout one date', () => {
        const myDate = new Date("January 31 1980 12:30");

        // expect(typeof myDate).toBe("date");
        expect(getDateContext(myDate)).toBe([]);

    });

});

// const getDateContext = (myDate) => {
//     return {
//         date: myDate,
//         day: myDate.format("D"),
//         year: myDate.format("Y"),
//         month: myDate.format("MMMM"),
//         daysInMonth: myDate.daysInMonth(),
//         firstDayOfMonth: moment(myDate).startOf('month').format('d'),
//     }
// }