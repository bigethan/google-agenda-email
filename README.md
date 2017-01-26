# Google Calendar Agenda Emailer

Every night (or whenever) it sends an email with tomorrow's schedule using Google App scripts. The email looks something like:

```
09:30 - 10:00 in Meeting Room Fido
	Cadence Check In
10:00 - 11:00 in The Lounge
	Coffee Chat
10:00 - 10:25 in Team Area
	Stand Up
13:30 - 14:30 in Main Conference Room
	[Optional] Product Review
17:15 - 18:15
	Child Care
```

I don't usually check my work calendar/email once I'm home.

# Installation
1. Log into the google account that your calendar is attached to
1. Visit https://www.google.com/script/start/
1. Click 'Start Scripting'
1. Paste in the [javascript file from this repo](https://raw.githubusercontent.com/bigethan/google-agenda-email/master/event-mailer.js)
And name the script something helpful.  It'll be in your Google Drive once you save it.
1. Go to `File -> Project Properties -> Script Properties` and add a property 
named `MAILTO` with the value of the email address you'd like to use.
1. Test it out by going to `Run -> getEventsAndMail`.

If it all works well, you can set up your time based trigger via `Resources -> Current Project's Triggers`.
If you want to have it send daily, choose:

1. getEventsAndMail
1. time-driven
1. Day timer
1. The hour you'd like to recieve your email.  Typically it happens at the very beginning of the time range.

If it doesn't all work well, I might be able to help. It's also imperfect, so please improve and share 👍

# FAQ
### Didn't you know that Google Calendar already has a Daily Agenda option?
I do. But it sends out at 5am, which (imho) is a pretty terrible time to remind anyone of anything. And! It'll only
send to the email address that is associated with the calendar.

### Isn't this just copying a feature from [Donna](http://don.na/)?
Yep! I missed it when they shut down.
