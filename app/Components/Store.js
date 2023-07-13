'use client'

import React from 'react';

const Store = ({ allStores, hours }) => {
    const [hourlyCust, setHourlyCust] = React.useState([]);
    const [hourlyCookies, setHourlyCookies] = React.useState([]);
    const [totalCookies, setTotalCookies] = React.useState([]);

    const getRNGcust = (minCust, maxCust) => {
        // console.log('minCust, maxCust', minCust, maxCust)
        return setHourlyCust(Math.round(Math.random() * (maxCust - minCust ) + minCust));
    }

    const getHourlyCook = (avgCookies, hourlyCust) => {
        // console.log('avgCookie & hourlyCust', avgCookies, hourlyCust)
        for (let i = 0; i < hours.length; i++) {
            return setHourlyCookies((Math.ceil(hourlyCust * avgCookies)))
        }
    }

    const getTotalCookies = (hourlyCookies) =>{
        return setTotalCookies(hourlyCookies.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    }

    const doMath = (allStores) => {
        for(let i=0; i < allStores.length; i++){
            getRNGcust(allStores[i][1], allStores[i][2]);
            console.log('hourlyCust', hourlyCust);
            getHourlyCook(allStores[i][3], hourlyCust)
            console.log('hourlyCookies', hourlyCookies);
            getTotalCookies(hourlyCookies);
            console.log('totalCookies', totalCookies);
        }
    }
    // console.log('allStores', allStores);

    
    return (
        <p onClick={() => doMath(allStores)}>Store Placeholder</p>
    );
}

export default Store;