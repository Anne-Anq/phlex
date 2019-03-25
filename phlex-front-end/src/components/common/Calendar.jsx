import React, { Component } from 'react';
import Select from "../common/buttons/Select";
import { getToday, getDateContext, weekDays, getWeeksInMonth, setDate, navigate, monthsArr, yearsArr } from "../../logics/calendar";
import "../../stylesheets/Calendar.css";

class Calendar extends Component {
    state = {
        dateContext: "",
        today: "",
    }
    componentDidMount() {
        const today = getToday();
        const dateContext = getDateContext(today.date);
        this.setState({ dateContext, today });
    }
    handleNavigation = (action) => {
        this.setState({ dateContext: navigate(action, this.state.dateContext) });
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
        const { today, dateContext } = this.state;
        const weeksInMonth = getWeeksInMonth(today, dateContext, notAvailable);
        return (
            weeksInMonth.map((week, i) =>
                <tr key={`week-${i}`}>
                    {week.map(day => <td key={day.key} className={day.className}>
                        {day.content}
                    </td>)}
                </tr>
            )
        )
    }
    render() {
        const { notAvailable } = this.props.photographer;
        const { year, month } = this.state.dateContext;
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
            </div>
        );
    }
}

export default Calendar;