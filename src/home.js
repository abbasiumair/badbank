import NavBar from './navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import { UserContext } from './context';
import bankImg from './bank.png'
import Card from './card.js';


function Home(){
  const ctx = React.useContext(UserContext);  

  return (
    <>
    <div>Currently logged-in as {ctx.loggedInUser.name}</div>
    <Card
            bgcolor='white'
            txtcolor='black'
            header='Home'
            title='Welcome to the Bad Bank!'
            text='Please Create an Account. You can than Login, Deposit, and Withdraw.'
            body={(<img src={bankImg} className="img-fluid" alt="Responsive Image"/>)}
        />
    </>
  );  
}

export default Home;