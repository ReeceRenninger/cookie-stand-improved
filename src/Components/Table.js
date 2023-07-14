import { useEffect, useState } from "react";

//!! Chat gpt/ co pilot is the only reason this is here, idk wtf is even happening but its works so im not touching it
const Table = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [tracker, setTracker] = useState(true);

  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  useEffect(() => {
    if (isLoaded) {
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
      setIsLoaded(true);
    }
    //why is this showing an error with just props.stores, apparently need isLoaded here as well
  }, [isLoaded, props.stores]);

  if (!tracker) {
    return <div>Loading...</div>;
  }

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