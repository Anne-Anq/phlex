import $ from 'jquery';
import 'fullcalendar';


export default () => $('.calendar').fullCalendar({
    weekends: true,
    contentHeight: 200,

    today: false,

    header: {
        left: 'title',
        center: '',
        right: 'prev,next'
    },
    buttonIcon: {

        prev: 'left-single-arrow',
        next: 'right-single-arrow',
        prevYear: 'left-double-arrow',
        nextYear: 'right-double-arrow'

    }
});;