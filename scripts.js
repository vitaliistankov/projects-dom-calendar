var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = DOMat.get("year"); //using the library
//var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var yearAndmonth = DOMat.get("yearAndmonth");
//var yearAndmonth = document.getElementById("yearAndmonth");
showCalendar(currentMonth, currentYear);


//

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}



//Creating function which takes in two parameters. Once, the function is called, it dynamically generates a calendar in HTML and appends it into the table.

function showCalendar(month, year) {

    //Get the first day of the month

    var firstDay = (new Date(year, month)).getDay();

    //Get the number of days in that month: the function new Date(year, month, 32) returns the 32nd day after the month started. If we subtract that date from 32, we get the final day of that month. Example, If we pass feb 2018 as an argument, its ‘32nd’ day will be 4th of march, subtract 32 from 4 and we get 28, final day of the month of feb 2018.

    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    //var tbl = document.getElementById("calendar-body"); // body of the calendar
    var tbl = DOMat.get("calendar-body"); // body of the calendar


    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    yearAndmonth.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    //creating all cells. 

    var date = 1;
    for (var i = 0; i < 6; i++) {
        // creates a table row
        var row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                var cell = document.createElement("td");
                //var cellText = document.createTextNode("");
                //cell.appendChild(cellText);
                DOMat.textElement(cell, "");
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                var cell = document.createElement("td");
                //var cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    //cell.classList.add("bg-info");
                    DOMat.attribute(cell, "class", "bg-info");
                } // paint today's date
                //cell.appendChild(cellText);
                DOMat.textElement(cell, date)
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}