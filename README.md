# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

#
- - -
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Implementation details

The code was implement based on the above User Story and the Associated functional amd non-functional requiferments:
Some key details are:
### html:
* Each button element was appended with an id (0-#timeBlocks)
* This btn key is used to reference the corresponding click event through the function "on_click(this.id)
* the time blocks are initially blank and are set through the script.js

### Script.js
* Elaments are passed into the corresponding  arrays/lists: Names are selfexplanatory
* An itemKey[] aray is declared to hold the keys for each row input
* Any inputs storred in the local storage are read into and the corresponding values in the elements are populated
* The time column for each block is populated in an appropriate format. Input variables allow easiliy to change the time step
* a setInterval function with a time trigger is defined to calculated and upfdate the input formats (color)
* the on_click functions stores any updated inputs into local storage



