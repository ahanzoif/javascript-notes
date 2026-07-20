// ********************** Date **********************

let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())
//Returns the complete date and time as a readable string.
//Example: Mon Jul 20 2026 21:30:45 GMT+0530 (India Standard Time)

console.log(myDate.toDateString())
//Only shows the date, No time.
//Example: Mon Jul 20 2026

console.log(myDate.toISOString())
//ISO format is the international standard.
// Useful for:
// APIs
// Databases
// JSON
// Backend communication
//Example: 2026-07-20T16:00:45.123Z

console.log(myDate.toJSON())
//It is almost the same as toISOString().
//Example: 2026-07-20T16:00:45.123Z

console.log(myDate.toLocaleDateString())
//Shows only the date according to the user's locale.
//Example: 20/7/2026

console.log(myDate.toLocaleTimeString())
//Shows only the time.
//Example: 9:30:45 PM

console.log(myDate.toLocaleString())
//Shows both date and time in local format.
//Example: 20/7/2026, 9:30:45 PM

console.log(myDate.toTimeString())
//Shows only the time with timezone.
//Example: 21:30:45 GMT+0530 (India Standard Time)

console.log(myDate.toUTCString())
//Shows the time in UTC.
//Example: Mon, 20 Jul 2026 16:00:45 GMT

console.log(myDate.getTimezoneOffset())
//India is 5 hours 30 minutes = 330 minutes, JavaScript returns the difference in minutes between your local time and UTC.
//Example: -330

// ********************** Time Stamp **********************

let myCreatedDate = new Date("07-20-2026")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
//Returns the current time as milliseconds since 1 January 1970 UTC (the Unix Epoch).
//Example: 20/7/2026, 12:00:00 AM

console.log(myTimeStamp)
//Returns the timestamp of that date.
//Example: 1784505600000

//Why use timestamps?

// Suppose you want to know which post is newer.

// Instead of comparing dates:
// 20 July
// 19 July
// compare 1784505600000
        // 1784419200000
//The bigger timestamp is the newer date, Very fast and efficient.

console.log(myCreatedDate.getTime())


let newDate = new Date()
console.log(newDate)

console.log(newDate.getMonth())
//Output = 6
//Today is July.
// Why not 7?
// Because JavaScript months start from 0.

// | Month     | Value |
// | --------- | ----: |
// | January   |     0 |
// | February  |     1 |
// | March     |     2 |
// | April     |     3 |
// | May       |     4 |
// | June      |     5 |
// | July      |     6 |
// | August    |     7 |
// | September |     8 |
// | October   |     9 |
// | November  |    10 |
// | December  |    11 |


console.log(newDate.getDay())
//Returns the day of the week.

// | Day       | Value |
// | --------- | ----: |
// | Sunday    |     0 |
// | Monday    |     1 |
// | Tuesday   |     2 |
// | Wednesday |     3 |
// | Thursday  |     4 |
// | Friday    |     5 |
// | Saturday  |     6 |
