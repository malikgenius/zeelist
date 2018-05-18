import React from 'react';
import moment from 'moment';
import { Feed, Icon, Image } from 'semantic-ui-react';

const BirthdayListItems = ({employee}) => {
    let { name, imageURL, dob, id, position, } = employee
    const year = new Date().getFullYear();
    let DateofBirth = moment.unix(dob).format(`MM-DD-${year}`);
    dob = DateofBirth;
    console.log(dob)
    return (
    <Feed size="large">
        <Feed.Event>
        <Feed.Label size="large">
            
        <Image src={`${employee.imageURL}`} size='large' circular />
        </Feed.Label>
        <Feed.Content>
            <Feed.Summary>
            <Feed.User>{employee.name}</Feed.User> 
            <Feed.Date>
                {
                    // moment(dob) < moment() ? 
                     moment(dob).fromNow() 
                }
                {/* {birthday} */}
            </Feed.Date>
            <div>
            <Feed.Date>
                {
                    // moment(dob) < moment() ? 
                     moment(dob).format("DD MMMM") 
                }
                {/* {birthday} */}
            </Feed.Date>
            </div>
            </Feed.Summary>
            <Feed.Meta>
            {/* <Feed.Like>
                <Icon name='like' />
                4 Likes
            </Feed.Like> */}
            </Feed.Meta>
        </Feed.Content>
        </Feed.Event>
    </Feed>
    )
};

export default BirthdayListItems;