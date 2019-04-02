import React, { Component } from 'react';
import Select from "../common/buttons/Select";
import MoreButton from "../common/buttons/MoreButton";
import { getToday, getDateContext, weekDays, getWeeksInMonth, setDate, navigate, monthsArr, yearsArr, getDay } from "../../logics/calendar";
import "../../stylesheets/Calendar.css";

class Calendar extends Component {
    state = {
        dateContext: "",
        today: "",
        selectedDates: [],
    }
    componentDidMount() {
        const today = getToday();
        const dateContext = getDateContext(today.date);
        this.setState({ dateContext, today });
    }
    handleNavigation = (action) => {
        this.setState({ dateContext: navigate(action, this.state.dateContext) });
    }
    handleClick = (e) => {
        const { fName } = this.props.photographer;
        const { selectedDates } = this.state;
        if (selectedDates.length > 0) {
            let dateStr = selectedDates.map(d => d.date.format("MMM Do YYYY")).join(", ");
            alert(`You are about to send a request to ${fName} for the following date${selectedDates.length > 1 ? "s" : ""} : ${dateStr}.`)
        } else {
            alert(`You need to select the dates you want to book ${fName} for.`)
        }

    }
    selectDay = ({ content: dayNum, className }) => {
        if (!className.includes("booked")) {
            const { dateContext: { month, year }, selectedDates: datesArr } = this.state;
            const selectedDate = getDateContext(getDay(year, month, dayNum));
            let selectedDates = datesArr.filter(sDate => sDate.date.date() !== selectedDate.date.date());
            if (selectedDates.length === datesArr.length) selectedDates.push(selectedDate);
            this.setState({ selectedDates });
        }
    }
    handleSelectDate = (e) => {
        this.setState({ dateContext: setDate(e.target.name, e.target.value, this.state.dateContext) });
    }
    renderNav = (props) => {
        return (<div className="calendar-header">
            <i className="fas fa-angle-double-left"
                onClick={() => this.handleNavigation("prevYear")}
            ></i>
            <i className="fas fa-chevron-left"
                onClick={() => this.handleNavigation("prevMonth")}
            ></i>
            {props}
            <i className="fas fa-chevron-right"
                onClick={() => this.handleNavigation("nextMonth")}
            ></i>
            <i className="fas fa-angle-double-right"
                onClick={() => this.handleNavigation("nextYear")}
            ></i>
        </div>)
    }

    renderWeekDays = () => {
        return <tr>{weekDays.map((day) => <td key={day} className="week-day">{day}</td>)}</tr>
    }
    renderDays = (notAvailable) => {
        const { today, dateContext, selectedDates } = this.state;
        const weeksInMonth = getWeeksInMonth(today, dateContext, notAvailable, selectedDates);
        return (
            weeksInMonth.map((week, i) =>
                <tr key={`week-${i}`}>
                    {week.map(day => <td key={day.key}>
                        <button className={day.className} onClick={() => this.selectDay(day)}>
                            {day.content}
                        </button>

                    </td>)}
                </tr>
            )
        )
    }
    render() {
        const { notAvailable } = this.props.photographer;
        const { selectedDates, dateContext: { year, month } } = this.state;
        const navFields = [
            { name: "month", label: "Month", options: monthsArr, value: month },
            { name: "year", label: "Year", options: yearsArr, value: year },
        ]
        return (
            <div className="calendar-container">
                {this.renderNav(
                    <Select onChange={this.handleSelectDate} label={`${month} ${year}`} fields={navFields} />
                )}
                <table className="calendar">
                    <thead>
                        {this.renderWeekDays()}
                    </thead>
                    <tbody>
                        {this.renderDays(notAvailable)}
                    </tbody>
                </table>
                <div className="more-div">
                    {
                        selectedDates.length > 0 &&
                        <MoreButton variant="contained" color="secondary" onClick={this.handleClick} label="Book" />
                    }
                    {
                        selectedDates.length === 0 &&
                        <MoreButton variant="outlined" onClick={this.handleClick} label="Select" />
                    }
                </div>
            </div>
        );
    }
}

export default Calendar;