import React from 'react';

const PeopleCardMailto = (props) => {
    return (
        <a href="mailto:{props.employee.email}" />
    );
};

export default PeopleCardMailto;