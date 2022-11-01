/*
downloaded without webcal in front - can I just get this with a fetch / ajax call?

*/

var jcal, from;
let data = {value: ""};
data.value =  "webcal://api.veracross.com/cate/subscribe/4E5DB847-DC93-474C-877E-5DDFE5F03FDA.ics";
data.value = "calendars/" + (data.value.substring(data.value.indexOf("subscribe/") + 10));
console.log(data.value);
// ?uid=DD015FB9-2CC5-4B33-9902-60CB1881A77C

jQuery.get(data.value, function(data) {
    try {
        jcal = ICAL.parse(data);
        from = "ical";

        ical = ICAL.stringify(jcal);

    } catch (icalerr) {
        // leterror.textContent = "Couldn't parse as iCalendar:\n" +
        //     stringError(icalerr) + "\n\nNor as jCal:\n" +
        //     stringError(jsonerr);
        console.log(icalerr)
    }
});



