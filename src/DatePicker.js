import React, { Component } from "react";

class DatePicker extends Component {
    handleDateChange = (type, e) => {
        const date = e.target.value;

        this.props.onDateChange({ [type]: date });
    };

    render() {
        const { startDate, endDate } = this.props;

        return (
            <div>
                <label htmlFor="#start-date">Start Date </label>
                <input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={this.handleDateChange.bind(null, "startDate")}
                />
                <label htmlFor="#end-date">End Date </label>
                <input
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={this.handleDateChange.bind(null, "endDate")}
                />
            </div>
        );
    }
}
 
export default DatePicker;