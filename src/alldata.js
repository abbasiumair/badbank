import React from 'react';
import { UserContext } from './context';
import Card from './card';
import bankImg from './bank.png';

function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div>Logged-in as {ctx.loggedInUser.name}</div>
      <Card
        bgcolor='white'
        txtcolor='black'
        header='All Data'
        text="Changes made during current session."
        body={<img src={bankImg} className="img-fluid" alt="Responsive Image" />}
      />
      <div>{JSON.stringify(ctx)}</div>
    </>
  );
}

export default AllData;