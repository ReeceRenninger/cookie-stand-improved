'use client'

import React from 'react';
import { useState, useEffect } from 'react';

const Store = () => {
    const hours = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"];

    const locationData = [
        { name: 'Seattle', minCust: 23, maxCust: 65, avgCookies: 6.3 },
        { name: 'Tokyo', minCust: 3, maxCust: 24, avgCookies: 1.2 },
        { name: 'Dubai', minCust: 11, maxCust: 38, avgCookies: 3.7 },
        { name: 'Paris', minCust: 20, maxCust: 38, avgCookies: 2.3 },
        { name: 'Lima', minCust: 2, maxCust: 16, avgCookies: 4.6 }
    ];

    const [storeData, setStoreData] = useState([]);

    useEffect(() => {
        const calculateStoreData = () => {
            const updatedStoreData = locationData.map((location) => {
                const hourlyCust = getRNGcust(location.minCust, location.maxCust);
                const hourlyCookies = getHourlyCook(location.avgCookies, hourlyCust);
                const totalCookies = getTotalCookies(hourlyCookies);
                return {
                    name: location.name,
                    hourlyCust,
                    hourlyCookies,
                    totalCookies
                };
            });
            setStoreData(updatedStoreData);
            console.log('this is updatedStoreData', updatedStoreData);
        };

        const getRNGcust = (minCust, maxCust) => {
            return Math.round(Math.random() * (maxCust - minCust) + minCust);
        };
        //set cookies to be an empty array, loop through hours array and push the hourly cookies from doing hourlyCust (which is from calculateStoreData) above times avgCookies (from locationData ) above.. return cookies array
        const getHourlyCook = (avgCookies, hourlyCust) => {
            const cookies = [];
            for (let i = 0; i < hours.length; i++) {
                let cookiesSold = Math.ceil(hourlyCust * avgCookies);
                cookies.push(cookiesSold);
                hourlyCust = getRNGcust(location.minCust, location.maxCust);
            }
            return cookies;
        };

        const getTotalCookies = (hourlyCookies) => {
            return hourlyCookies.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        };

        calculateStoreData();
    }, []);

    console.log(storeData);

    return (
        <div>
            <h1>Store Data</h1>
            {storeData.map((store) => (
                <div key={store.name}>
                    <h2>{store.name}</h2>
                    <p>Hourly Customers: {store.hourlyCust}</p>
                    <p>Hourly Cookies: {store.hourlyCookies.join(', ')}</p>
                    <p>Total Cookies: {store.totalCookies}</p>
                </div>
            ))}
        </div>
    );
};

export default Store;