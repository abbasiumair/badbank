import React from 'react';
import { UserContext } from './context';
import Card from './card';
import bankImg from './bank.png'

function About(){
    const ctx = React.useContext(UserContext);

    return (
        <>
        <div>Logged-in as {ctx.loggedInUser.name}</div>
        <Card
            bgcolor='white'
            txtcolor='black'
            header='About Us'
            text='This is fake bank website that implements students to demonstrate creating a React Apps. MIT assignment that illustrates coding challenges and proactive approach using all we have learned through the semester. This was a fun and challenging assignment!'
            body={(<img src={bankImg} className='img-fluid' alt="Responsive Image"/>)}
            />
        </>
    )
}

export default About;
