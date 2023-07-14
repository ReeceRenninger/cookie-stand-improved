import { useEffect, useState } from "react";

//!! Chat gpt/ co pilot is the only reason this is here, idk wtf is even happening but its works so im not touching it
const Table = (props) => {
  //rendered is to track if the table has been rendered yet, if it has then it will update the table with the new store 
  const [rendered, setRendered] = useState(false);
  //the tracker is to make sure the table only renders once, otherwise it will render every time the state changes
  const [tracker, setTracker] = useState(true);

  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  useEffect(() => {
    if (rendered) {
      setTracker(false);
      const newStore = props.stores[props.stores.length - 1];
      newStore.cookiesBought = [];
      newStore.getCookiesBought();
      setTimeout(() => {
        setTracker(true);
        
      }, 500);

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