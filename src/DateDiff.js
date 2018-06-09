import React, { Component } from "react";

import DatePicker from "./DatePicker";
import Duration from "./Duration";

class DateDiff extends Component {
    state = { startDate: "", endDate: "" };

    handleDateChange = (newDate) => {
        this.setState((state) => {
            const { startDate = state.startDate, endDate = state.endDate } = newDate;

            return { startDate, endDate };
        });
    }

    render() {
        const { startDate, endDate } = this.state;

        return (
            <div>
                <DatePicker
                    startDate={startDate}
                    endDate={endDate}
                    onDateChange={this.handleDateChange}
                />
                <Duration startDate={startDate} endDate={endDate} />
            </div>
        );
    }
}

export default DateDiff;