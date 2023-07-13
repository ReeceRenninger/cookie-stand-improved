'use client'

import React from 'react';

const Store = () => {
    // const [name, setName] = React.useState('');
    // const [minCust, setMinCust] = React.useState(0);
    // const [maxCust, setMaxCust] = React.useState(0);
    // const [avgCookie, setAvgCookie] = React.useState(0);
    const [hourlyCust, setHourlyCust] = React.useState([]);
    const [hourlyCookies, setHourlyCookies] = React.useState([]);
    const [totalCookies, setTotalCookies] = React.useState([]);
    const [allStores, setAllStores] = React.useState([]);

    const getRNGcust = (minCust, maxCust) => {
        setHourlyCust(Math.floor(Math.random() * (maxCust - minCust) + minCust));
    }

    const getHourlyCook = (avgCookies, hourlyCust) => {
        for (let i = 0; i < hours.length; i++) {
            setHourlyCookies((Math.ceil(hourlyCust[i] * avgCookies)))
        }
    }

    const getTotalCookie = (hourlyCookies, totalCookies) =>{
        setTotalCookies(hourlyCookies.reduce((hourlyCookies, totalCookies) => hourlyCookies + totalCookies, 0))
    }

    return (
        <p>Store Placeholder</p>
    );
}

export default Store;