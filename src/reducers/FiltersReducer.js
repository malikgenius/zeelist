import moment from 'moment';
const initialstate = {
    birthDayText: '',
    text: '',
    sortBy: 'name',
    startDate: moment().startOf('day'),
    endDate: moment().endOf('month'),
};

export default ( state = initialstate, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };

        case 'SET_BIRTHDAY_FILTER':
        return {
            ...state,
            birthDayText: action.text
        };

        case 'SORT_BY':
        return {
            ...state,
            sortBy: action.payload
        };

        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };
        default:
            return state;
    }
};