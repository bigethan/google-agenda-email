/**
 * A script to instal into google app scripts
 * https://www.google.com/script/start/
 * That will email your agenda for the next day whenever
 * you specify a trigger. (I set it daily at 8-9pm)
 *
 * Why? I use this to remind me via personal email what I'm
 * going to be doing the next day at work without having to
 * load my whole work google account onto my phone.
 */

function getEventsAndMail() {
  // message defaults - set to address in the script properties
  // File -> Project Properties -> Script properties tab
  var scriptProps = PropertiesService.getScriptProperties();
  var mailTo = scriptProps.getProperty('MAILTO');
  var subject = "Tomorrow's Meetings"
  var message = '';
  var timeSplit;
  var niceTime;

  // event data
  var messageEvents = [];
  var events;
  var eventTime;
  var eventTitle;

  // Get Date objects for tomorrow morning and night
  var d = new Date();
  d.setHours(0,0,0,0);
  d.setDate(d.getDate() + 1);
  var tomorrowAm = new Date(d);
  d.setDate(d.getDate() + 1);
  var tomorrowPm = new Date(d)

  // get the events
  events = CalendarApp.getDefaultCalendar().getEvents(tomorrowAm, tomorrowPm);

  if (!events.length) {
    // TODO: weekend check?
    subject = 'NO MEETINGS?';
    message = "Probably a bug, check your calendar";
  } else {
    // create the list
    for (var i = 0; i < events.length; i++) {
      startSplit = events[i].getStartTime().toTimeString().split(':');
      niceStart = startSplit[0] + ':' + startSplit[1]
      endSplit = events[i].getEndTime().toTimeString().split(':');
      niceEnd = endSplit[0] + ':' + endSplit[1]
      message += niceStart + ' - ' + niceEnd + "\n\t"
        + events[i].getTitle() + "\n";
    }
  }

  MailApp.sendEmail(mailTo, subject, message);
}
