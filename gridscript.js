

document.getElementById("monthHeader").innerText = findMonth(); 

function findMonth() {
    months = ['January','February','March','April','May','June','July',
             'August','September','October','November','December'];
    var today = new Date();
    var month = today.getMonth();
    hideDays(month);

    return 'Month: ' + months[month];
}

// hides some div days depending on month
function hideDays(month) {
    var day29 = document.getElementById("day29");
    var day30 = document.getElementById("day30");
    var day31 = document.getElementById("day31");

    if (month == 1) { // feb (ignoring leap year)
        day29.style.display = "none";
        day30.style.display = "none";
        day31.style.display = "none";
    }

    if ((month == 3) || (month == 5) || (month == 8) || (month == 9)) { // April, June, Sept, Nov 
        day31.style.display = "none";
    }
}

function clickedDay(day) {
    var id = day.id;
    //alert(id); // testing that i have correct id 
    window.location.href =  "postpage.html?" + id; //postpage.html?day1
}


