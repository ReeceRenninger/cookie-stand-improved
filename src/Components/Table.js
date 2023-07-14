import { useEffect, useState } from "react";

//!! Chat gpt/ co pilot is the only reason this is here, idk wtf is even happening but its works so im not touching it
//TODO: NEED TO STILL GENERATE THE DAILY TOTAL FOR ALL LOCATION TOTALS I CANT MATHS AND MY BRAIN IS FRIED FROM THIS WEEK 
const Table = (props) => {

  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  // let storeLocations = [...props.stores];
  
  // const getDailyTotals = () => {
  //   let grandTotal = 0; // DOES NOT RESET ON LOOP COMPLETION, HOLDS ALL VALUES to print grand total
  //   for (let i = 0; i < hours.length; i++) {
  //       let totalHourly = 0; // resets to 0 on j loop completion on each iteration
  //       for (let j = 0; j < storeLocations.length; j++) {
  //           totalHourly += storeLocations[j].cookiesBought[i];
  //           grandTotal += storeLocations[j].cookiesBought[i];
  //       }
  //   }
  // }

  //rendered is to track if the table has been rendered yet, if it has then it will update the table with the new store 
  const [rendered, setRendered] = useState(false);
  //the tracker is to make sure the table only renders once, otherwise it will render every time the state changes
  const [tracker, setTracker] = useState(true);


  useEffect(() => {
    //creates the new store using props passed down, built in timer to give a small loading window so we know its working
    if (rendered) {
      setTracker(false);
      //newStore is the new store being added, we need to set cookies bought to an empty array so we can generate the new store, props.stores is the array of stores passed down from the parent and we are adding the new store to the end of the array
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

  //this gives us a brief load screen while table is rendering new store add from the form
  if (!tracker) {
    return <div>Loading...</div>;
  }
  //tracker is essentially acting as our boolean that would be or When component if we pull in react if
  if (tracker) {

    return (
      <>
        <table className="table">
          <thead>
            <tr className="cell">
              <th>Location</th>
              {hours.map((hour, idx) => <th key={`hours-${idx}`}>{hour}</th>)}
              <th >Daily Location Total</th>
              
            </tr>
          </thead>
          <tbody>
            {props.stores.map((store, idx) => (
              <tr key={`store-${idx}`}>
                <td >{store.name}</td>
                {store.cookiesBought.map((cookies, idx) => <td key={`${store}-cookie-${idx}`}>{cookies}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default Table;