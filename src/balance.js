import React from 'react';
import { UserContext } from './context';
import Card from './card';

function Balance(){
  const ctx = React.useContext(UserContext);

  return (
    <>
    <div>Currently logged in as {ctx.loggedInUser.name}</div>
    <Card
      bgcolor='black'
      header='Current Balance'
      text=" Current balance"
      body={(
        <div>
          {ctx.loggedInUser.balance ? ` Current balance is: $${ctx.loggedInUser.balance}` : 'Please create an account, to see a balance.'}
        </div>
      )}
    />
    </>
  )
}

export default Balance;