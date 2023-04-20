import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {

    let usersCheck = null;
    if (props.users.length > 0) {
        usersCheck = <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul> 
    } 
 
    return (
        <Card className={classes.users}>
            {usersCheck}
        </Card>
    );
};


export default UsersList; 