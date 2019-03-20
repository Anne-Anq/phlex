import $ from 'jquery';
import 'fullcalendar';
//import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';

// const calendar = () => new Calendar($('.calendar'), {
//     plugins: [bootstrapPlugin],
//     themeSystem: 'bootstrap'
// });



const renderCalendar = () =>
    $('.calendar').fullCalendar({
        plugins: [bootstrapPlugin],
        //themeSystem: 'bootstrap',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: '2018-11-16',
        navLinks: true,
        eventLimit: true,
        events: [{
            title: 'Front-End Conference',
            start: '2018-11-16',
            end: '2018-11-18'
        },
        {
            title: 'Hair stylist with Mike',
            start: '2018-11-20',
            allDay: true
        },
        {
            title: 'Car mechanic',
            start: '2018-11-14T09:00:00',
            end: '2018-11-14T11:00:00'
        },
        {
            title: 'Dinner with Mike',
            start: '2018-11-21T19:00:00',
            end: '2018-11-21T22:00:00'
        },
        {
            title: 'Chillout',
            start: '2018-11-15',
            allDay: true
        },
        {
            title: 'Vacation',
            start: '2018-11-23',
            end: '2018-11-29'
        },
        ]
    });

export default renderCalendar;


// export default () => $('.calendar').fullCalendar({
//     weekends: true,
//     contentHeight: 200,

//     today: false,

//     header: {
//         left: 'title',
//         center: '',
//         right: 'prev,next'
//     },
//     buttonIcon: {

//         prev: 'left-single-arrow',
//         next: 'right-single-arrow',
//         prevYear: 'left-double-arrow',
//         nextYear: 'right-double-arrow'

//     }
// });;