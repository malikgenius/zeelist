import moment from 'moment';
moment.updateLocale('en', {
    relativeTime: {
        future: "in %s",
        past: "%s ago",
        s:  "today",
        m:  "today",
        mm: "today",
        h:  "today",
        hh: "today",
        d:  "1 day",
        dd: "%d days",
    }
});