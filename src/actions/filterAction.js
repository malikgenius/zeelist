import moment from 'moment';

export const setTextFilter = (text) => {
    console.log(text);
    return {
        type: 'SET_TEXT_FILTER',
        text
    };
};

export const setBirthdayTextFilter = (text) => {
    return {
        type: 'SET_BIRTHDAY_FILTER',
        text
    };
};

export const sortBy = (payload) => {
    return {
        type: 'SORT_BY',
        payload
    };
};

export const setStartDate = (startDate) => {
    
    return {
        type: 'SET_START_DATE',
        startDate
    };
};

export const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    };
};