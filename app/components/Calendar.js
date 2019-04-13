import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../utils/events'
import dates from '../utils/dates'
import moment from 'moment';


let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const localizer = BigCalendar.momentLocalizer(moment)

const Basic = props => (
    <BigCalendar
        events={events}
        views={allViews}
        step={60}
        showMultiDayTimes
        max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
        defaultDate={new Date(2015, 3, 1)}
        localizer={localizer}
    />
)

export default Basic