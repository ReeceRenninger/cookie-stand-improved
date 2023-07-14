// built outside of class to call into the function being used, WILL NOT WORK WITHIN THE CLASS, RANDOMCUST BECOMES UNDEFINED TO OTHER FUNCTION CALLING IT
const randomCust = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Store {
    constructor(name, minCust, maxCust, avgCookie) {
        this.name = name;
        this.minCust = minCust;
        this.maxCust = maxCust;
        this.avgCookie = avgCookie;
        this.cookiesBought = [];
    }

    getCookiesBought() {
        let cookiesTotal = 0;
        //15 hours of operation for the table to properly display totals at right hour
        for (let i = 0; i < 15; i++) {
            let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
            this.cookiesBought.push(cookies);
            cookiesTotal += cookies;
        }
        this.cookiesBought.push(cookiesTotal);
    }

}

export default Store;

