import React, { Component } from 'react';
import moment from "moment";
import "../../stylesheets/Calendar.css";

class Calendar extends Component {
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
    }
    // weekdays = moment.weekdays();
    // //weekdaysShort = moment.weekdaysShort();
    // months = moment.months();
    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }
    renderWeekDays = () => {
        return moment.weekdaysShort().map((day) => <td key={day} className="week-day">{day}</td>);
    }
    renderPrevMonthDays = () => {
        const blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={`empty-${i}`} className="emptySlot">{""}</td>)
        }
        return blanks;
    }
    renderDaysInMonth = () => {
        const daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            const className = (d === this.currentDay() ? "day current-day" : "day")
            daysInMonth.push(
                <td key={`day-${d}`} className={className}>
                    <span>{d}</span>
                </td>
            )
        }
        return daysInMonth;
    }
    renderTotalSlots = () => {
        const totalSlots = [...this.renderPrevMonthDays(), ...this.renderDaysInMonth()]
        const rows = [];
        let cells = [];
        totalSlots.forEach((cell, i) => {
            if (i === 0 || (i % 7) !== 0) {
                cells.push(cell);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(cell);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        })
        const trElements = rows.map((row, i) => {
            return (
                <tr key={`row-${i}`}>
                    {row}
                </tr>
            )
        })
        return trElements;
    }
    onMonthChange = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        })
    }
    renderMonthNav = () => {
        return (
            <span className="label-month" onClick={e => this.onMonthChange(e, this.month())}>

                {this.month()}
                {this.state.showMonthPopup && this.renderSelectList(moment.months())}
            </span>
        )
    }
    setMonth = month => {
        const monthNo = moment.months().indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({ dateContext });
    }
    onSelectChange = (e, data) => {
        this.setMonth(data);
    }
    renderSelectList = (array) => {
        return (
            <div className="month-popup">
                {array.map(el => <div key={el}><a href="#" onClick={e => this.onSelectChange(e, el)}>{el}</a></div>)}
            </div>
        )
    }
    render() {
        return (
            <div className="calendar-container">
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="5">
                                {this.renderMonthNav()}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >{this.renderWeekDays()}</tr>
                        {this.renderTotalSlots()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calendar;