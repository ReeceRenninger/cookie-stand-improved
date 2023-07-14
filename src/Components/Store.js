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
        for (let i = 0; i < 14; i++) {
            let cookies = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookie);
            this.cookiesBought.push(cookies);
            cookiesTotal += cookies;
        }
        this.cookiesBought.push(cookiesTotal);
    }

}

export default Store;

