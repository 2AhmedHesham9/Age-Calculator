function calcAge() {
    birhtdate = document.getElementById('birthOfDate').value;

    date = birhtdate.split('-');
    year = date[0];
    month = date[1];
    day = date[2];
    currentyear = new Date().getFullYear();
    currentmonth = new Date().getMonth() + 1;
    currentday = new Date().getDate();
    newyear = 0;
    newmonth = 0;
    newday = 0;
    // validate input and some condithions
    val = validate(birhtdate, year, month, day, currentyear, currentmonth, currentday);
    if (val) {
        if (currentmonth == month && currentday == day && currentyear > year) {

            alert('Happy Birthday To You ☻♥');
        }

        if (currentyear >= year) {
            newyear = currentyear - year;
        }

        if (currentmonth < month) {
            newmonth = currentmonth;
            newyear = parseInt((newyear * 12 - newmonth) / 12)
            newday = currentday;
        }
        else {
            newmonth = currentmonth - month;
            newday = Math.abs(currentday - day);
        }
        yourAge = "Your age is " + newyear + " year " + 'and ' + newmonth + " month " + 'and ' + newday + ' day';
        document.getElementById('age').innerHTML = yourAge
        document.getElementById('age').style.visibility = "visible"
    }

}

function validate(birhtdate, year, month, day, currentyear, currentmonth, currentday) {
    if (!birhtdate) {
        alert('please enter Your BirthDate')
        return 0;
    }
    if (currentyear == year && currentmonth < month) {
        alert('Please enter Your Birth Date correctly');
        return 0;
    }
    if (currentyear == year && currentmonth <= month && currentday < day) {
        alert('Please enter Your Birth Date correctly');
        return 0;
    }
    if (currentyear < year) {
        alert(' Your Birth Date must be less than current date ' + currentyear + '/' + currentmonth + '/' + currentday);
        return 0;
    }
    return 1;
}