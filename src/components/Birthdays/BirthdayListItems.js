import React from 'react';
import moment from 'moment';
import { Feed, Icon, Image } from 'semantic-ui-react';
import BirthdayAnimation from './BirthdayAnimation';
// import './momentUpdateLocale';
// Firefox may have issue with our date check below syntex and moment docs for string + format 
// Moment String + Format will work on all browsers moment("12-25-1995", "MM-DD-YYYY");   moment(dob, "MM-DD-YYYY").format("Do MMMM") 

const BirthdayListItems = ({employee}) => {
    let { name, imageURL, dob, id, position, } = employee
    const year = new Date().getFullYear();
    let DateofBirth = moment.unix(dob).format(`MM-DD-${year}`);
    // let dateofbirth = parseInt((new Date(DateofBirth).getTime() / 1000).toFixed(0));
    dob = DateofBirth;
   
    return (
    <Feed size="large">
        <Feed.Event>
        <Feed.Label size="large">
            
        <Image src={`${employee.imageURL}`} size='large' circular />
        </Feed.Label>
        <Feed.Content>
            { dob === moment().format("MM-DD-YYYY") ? 
            <Feed.Summary>
            <Feed.User>{employee.name} <BirthdayAnimation /> </Feed.User> 
      
            <div>
            <Feed.Date>
                {
                    // moment(dob) < moment() ? 
                     moment(dob, "MM-DD-YYYY").format("Do MMMM") 
                    // dob
                }
                {/* {birthday} */}
            </Feed.Date>
            </div>
            </Feed.Summary>

            :

             (<Feed.Summary>
            <Feed.User>{employee.name}</Feed.User> 
            <Feed.Date>
                {
                    // moment(dob) < moment() ? 
                     moment(dob, "MM-DD-YYYY").fromNow()
                }
                {/* {birthday} */}
            </Feed.Date> 
            <div>
            <Feed.Date>
                {
                    // moment(dob) < moment() ? 
                     moment(dob, "MM-DD-YYYY").format("Do MMMM") 
                }
                {/* {birthday} */}
            </Feed.Date>
            </div>
            </Feed.Summary>)}
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