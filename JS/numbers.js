// Generate a random number of customers per hour based on max and min number expectations
function numberOfCustomers(min, max){
    let differenceSpan = max - min;
    let randomFloatingPointNumber = Math.random() * differenceSpan;
    let randomInteger = Math.round(randomFloatingPointNumber);
    let customersThisHour = randomInteger + min;
    return customersThisHour;
};


// For Seattle:
const seattle = {
    cityName: 'Seattle',

//  First columm = Times between 6am and 7pm PST

    //  Min customers per hour = 23
    //  Max customers per hour = 65
    customersThisHour : 0, // Customer count starts at zero each hour
    generateCustomersThisHour: function() {
        this.customersThisHour = numberOfCustomers(23, 65);
    },
}
seattle.generateCustomersThisHour();

//  Average number of cookies purchased per sale = 6.3


// For Tokyo:
const tokyo = {
    cityName: 'Tokyo',

    //  Min customers/hour = 3
    //  Max customers/hour = 24
    customersThisHour : 0, // Customer count starts at zero each hour
    generateCustomersThisHour: function() {
        this.customersThisHour = numberOfCustomers(3, 24);
    },
}
tokyo.generateCustomersThisHour();

//  Operational Hours = 

//  Average number of cookies purchased per sale = 1.2


// For Dubai:
//  Hours = 
//  Min customers/hour = 11
//  Max customers/hour = 38
//  Average number of cookies purchased per sale = 3.7


// For Paris:
//  Hours = 
//  Min customers/hour = 20
//  Max customers/hour = 38
//  Average number of cookies purchased per sale = 2.3


// For Comas, Lima:
//  Hours = 
//  Min customers/hour = 2
//  Max customers/hour = 16
//  Average number of cookies purchased per sale = 4.6


// ========================================================

//  Create container to input into the DOM
let salesContainer = document.getElementById('salesNumbers');

//  Create function to render a table of sales data for any shop location
function salesData(city){

    //  Create an article to hold each city's sales data:
    let hourlySales = document.createElement('article');
    salesContainer.appendChild(hourlySales);

    //  Create headings for each city inside of its article:
    let cityHeading = document.createElement('h2');
    hourlySales.appendChild(cityHeading);
    cityHeading.textContent = city.cityName;

    //  Create a data table per location:
    let table = document.createElement('table');
    hourlySales.appendChild(table);

    // Create headings row inside table:
    let headingsRow = document.createElement('tr');
    table.appendChild(headingsRow);
    // Headings:
    let hoursHeading = document.createElement('th')
    headingsRow.appendChild(hoursHeading);
    hoursHeading.textContent = 'Hour Starting At';
    let customersHeading = document.createElement('th')
    headingsRow.appendChild(customersHeading);
    customersHeading.textContent = 'Number of Customers';
    let salesHeading = document.createElement('th')
    headingsRow.appendChild(salesHeading);
    salesHeading.textContent = 'Number of Sales';

    //  First column = hours of operation
    let firstHourSales = document.createElement('tr');
    table.appendChild(firstHourSales);
    let hoursColumn = document.createElement('td');
    firstHourSales.appendChild(hoursColumn);

    //  Second column = randomly generated number of customers that hour
    let firstHourCustomers = document.createElement('td');
    firstHourSales.appendChild(firstHourCustomers);
    firstHourCustomers.textContent = city.customersThisHour;


    //  Third column = randomly generated number of sales within predicted range for location

    //  Last row = total number of sales

}

// Call the function for each city
salesData(seattle);
salesData(tokyo);
salesData(dubai);
salesData(paris);
salesData(lima);
