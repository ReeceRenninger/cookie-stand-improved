// 'use client'

// import React from 'react';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//built outside constructor to call into the get cookiesBought function prior 
// this could be moved above the cookies bought function but testing in both locations
function randomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Store {
    constructor (name, minCust, maxCust, avgCookies) {
        this.name = name;
        this.minCust = minCust;
        this.maxCust = maxCust;
        this.avgCookies = avgCookies;
        this.cookiesBought = [];
}

getCookiesBought() {
    let cookiesTotal = 0;
    for( let i = 0; i < hours.length; i++) {
        let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookies);
        this.cookiesBought.push(cookies);
        cookiesTotal += cookies;
    } 
    this.cookiesBought.push(cookiesTotal);
    }

}

export default Store;


// const Store = ({ allStores, hours }) => {
//     const [hourlyCust, setHourlyCust] = React.useState([]);
//     const [hourlyCookies, setHourlyCookies] = React.useState([]);
//     const [totalCookies, setTotalCookies] = React.useState([]);

//     const getRNGcust = (minCust, maxCust) => {
//         // console.log('minCust, maxCust', minCust, maxCust)
//         return setHourlyCust(Math.round(Math.random() * (maxCust - minCust ) + minCust));
//     }

//     const getHourlyCook = (avgCookies, hourlyCust) => {
//         // console.log('avgCookie & hourlyCust', avgCookies, hourlyCust)
//         for (let i = 0; i < hours.length; i++) {
//             return setHourlyCookies((Math.ceil(hourlyCust * avgCookies)))
//         }
//     }

//     const getTotalCookies = (hourlyCookies) =>{
//         return setTotalCookies(hourlyCookies.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
//     }

//     const doMath = (allStores) => {
//         for(let i=0; i < allStores.length; i++){
//             getRNGcust(allStores[i][1], allStores[i][2]);
//             console.log('hourlyCust', hourlyCust);
//             getHourlyCook(allStores[i][3], hourlyCust)
//             console.log('hourlyCookies', hourlyCookies);
//             getTotalCookies(hourlyCookies);
//             console.log('totalCookies', totalCookies);
//         }
//     }
//     // console.log('allStores', allStores);

    
//     return (
//         <p onClick={() => doMath(allStores)}>Store Placeholder</p>
//     );
// }
