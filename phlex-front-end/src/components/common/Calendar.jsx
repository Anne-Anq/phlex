import React, { Component, Fragment } from 'react';
import moment from "moment";
import "../../stylesheets/Calendar.css";

class Calendar extends Component {
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        showYearNav: false,
    }

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
        return <tr>{moment.weekdaysShort().map((day) => <td key={day} className="week-day">{day}</td>)}</tr>
    }
    renderPrevMonthDays = () => {
        const blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={`empty-${i}`} className="emptySlot">{""}</td>)
        }
        return blanks;
    }
    renderDaysInMonth = (notAvailable) => {
        const daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            const dDate = moment().date(d).month(this.month()).year(this.year());
            let className = d === parseInt(this.currentDay(), 10) ? "day current-day" : "day";
            notAvailable.forEach(obj => {
                const dFrom = moment(obj.from);
                const dTo = moment(obj.to);
                if (!(dDate.isBefore(dFrom) || dDate.isAfter(dTo))) {
                    className = "day booked";
                }
            })

            daysInMonth.push(
                <td key={`day-${d}`} className={className}>
                    <span>{d}</span>
                </td>
            )
        }
        return daysInMonth;
    }
    renderTotalSlots = (notAvailable) => {
        const totalSlots = [...this.renderPrevMonthDays(), ...this.renderDaysInMonth(notAvailable)]
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
        });
    }
    renderMonthNav = () => {
        return (
            <span className="label-month mr-2" onClick={e => this.onMonthChange(e, this.month())}>

                {this.month()}
                {this.state.showMonthPopup && this.renderSelectList(moment.months())}
            </span>
        );
    }
    showYearEditor = () => {
        this.setState({ showYearNav: true })
    }
    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({ dateContext });
    }
    onYearChange = (e) => {
        this.setYear(e.target.value);
    }
    onLeaveYearNav = (e) => {
        if (this.state.showYearNav &&
            ((e.type === "click" && e.target.className !== "editor-year")
                || e.which === 13
                || e.which === 27)
        ) {
            this.setState({ showYearNav: false })
        }
    }
    onNextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({ dateContext });
    }
    onPrevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({ dateContext });
    }
    onNextYear = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "year");
        this.setState({ dateContext });
    }
    onPrevYear = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "year");
        this.setState({ dateContext });
    }
    renderYearNav = () => {
        return (
            <Fragment
            >
                {
                    this.state.showYearNav ?
                        <input
                            defaultValue={this.year()}
                            className="editor-year"
                            onKeyUp={(e) => this.onLeaveYearNav(e)}
                            onChange={(e) => this.onYearChange(e)}
                            type="number"
                        /> :
                        <span className="label-year"
                            onDoubleClick={() => this.showYearEditor()}>
                            {this.year()}
                        </span>
                }
            </Fragment>

        );
    }
    setMonth = month => {
        const monthNo = moment.months().indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({ dateContext });
    }
    onSelectChange = (data) => {
        this.setMonth(data);
    }
    renderSelectList = (array) => {
        return (
            <div className="month-popup">
                {array.map(el => <div key={el}><button className="month-btn" onClick={e => this.onSelectChange(e, el)}>{el}</button></div>)}
            </div>
        )
    }
    renderNav = (props) => {
        return (<div className="calendar-header p-2">
            <i className="fas fa-angle-double-left"
                onClick={this.onPrevYear}
            ></i>
            <i className="fas fa-chevron-left"
                onClick={this.onPrevMonth}
            ></i>
            {props}
            <i className="fas fa-chevron-right"
                onClick={this.onNextMonth}
            ></i>
            <i className="fas fa-angle-double-right"
                onClick={this.onNextYear}
            ></i>
        </div>)
    }
    render() {
        const notAvailable = [
            {
                id: 0,
                from: "2019-03-24",
                to: "2019-03-26",
            },
            {
                id: 1,
                from: "2019-03-28",
                to: "2019-03-30",
            },
        ];
        return (
            <div className="calendar-container p-2" onClick={(e) => this.onLeaveYearNav(e)}>
                {this.renderNav(
                    <div>
                        {this.renderMonthNav()}
                        {this.renderYearNav()}
                    </div>
                )}
                <table className="calendar p-2">
                    <thead>
                        {this.renderWeekDays()}
                    </thead>
                    <tbody>
                        {this.renderTotalSlots(notAvailable)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calendar;