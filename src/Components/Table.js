import { useEffect, useState } from "react";

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StoreTable = (props) => {

  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  //rendered is to track if the table has been rendered yet, if it has then it will update the table with the new store 
  const [rendered, setRendered] = useState(false);
  //the tracker is to make sure the table only renders once, otherwise it will render every time the state changes
  const [tracker, setTracker] = useState(true);

  useEffect(() => {
    //creates the new store using props passed down, built in timer to give a small loading window so we know its working
    if (rendered) {
      setTracker(false);
      // newStore is the new store being added, we need to set cookies bought to an empty array so we can generate the new store, props.stores is the array of stores passed down from the parent and we are adding the new store to the end of the array
      const newStore = props.stores[props.stores.length - 1];
      newStore.cookiesBought = [];
      newStore.getCookiesBought();

      setTimeout(() => {
        setTracker(true);
      }, 500);
      //if the new store isnt being added then we just generate the table as normal 
    } else {
      props.stores.forEach(store => store.cookiesBought = []);
      props.stores.forEach(store => store.getCookiesBought());
      setRendered(true);
    }
    //why is this showing an error with just props.stores, apparently need isLoaded here as well
  }, [rendered, props.stores]);

  const totalsRow = () => {
    let h = 0;
    let grandTotal = 0;
    let final = [];
    while (h < hours.length) {
      let hourlyTotal = 0;
      for (let i = 0; i < props.stores.length; i++) {
        hourlyTotal += props.stores[i].cookiesBought[h];
        grandTotal += props.stores[i].cookiesBought[h];
      }
      final.push(hourlyTotal)
      h++;
    }
    final.push(grandTotal)
    return final;
  }

  //this gives us a brief load screen while table is rendering new store add from the form
  if (!tracker) {
    return <div>Loading...</div>;
  }
  //tracker is essentially acting as our boolean that would be or When component if we pull in react if
  if (tracker) {

    return (
      <>
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table className="table">
              <TableHead>
                <TableRow className="cell">
                  <TableCell>Location</TableCell>
                  {hours.map((hour, idx) => <TableCell key={`hours-${idx}`}>{hour}</TableCell>)}
                  <TableCell>Daily Location Total</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {props.stores.map((store, idx) => (
                  <TableRow key={`store-${idx}`}>
                    <TableCell >{store.name}</TableCell>
                    {store.cookiesBought.map((cookies, idx) => <TableCell key={`${store}-cookie-${idx}`}>{cookies}</TableCell>)}
                  </TableRow>
                ))}
                <TableRow key={`store-total`}>
                  <TableCell>Grand Totals</TableCell>
                  {totalsRow().map((totals, idx) => 
                    <TableCell key={`${totals}-cookie-${idx}`}>{totals}</TableCell>)}
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </>
    )
  }
}

export default StoreTable;