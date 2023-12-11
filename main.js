/* 2023/24 Premier League Derby Matches
Reference sources:
https://www.youtube.com/watch?v=iiADhChRriM
https://www.youtube.com/watch?v=iiADhChRriM
*/

// Define the JSON string containing information of EPL derby matches
const derbiesString = `
[
    {
        "dateTime": "2023-09-24T13:00:00Z",
        "matchday": 6,
        "ended": true,
        "homeTeam": "Arsenal",
        "result": "2-2",
        "awayTeam": "Tottenham",
        "note": "North London derby"
    },
    {
        "dateTime": "2023-10-21T16:30:00Z",
        "matchday": 9,
        "ended": true,
        "homeTeam": "Chelsea",
        "result": "2-2",
        "awayTeam": "Arsenal",
        "note": "London derby"
    },
    {
        "dateTime": "2023-10-29T15:30:00Z",
        "matchday": 10,
        "ended": true,
        "homeTeam": "Man United",
        "result": "0-3",
        "awayTeam": "Man City",
        "note": "Manchester derby"
    },
    {
        "dateTime": "2023-12-17T16:30:00Z",
        "matchday": 17,
        "ended": false,
        "homeTeam": "Liverpool",
        "result": null,
        "awayTeam": "Man United",
        "note": "North West derby"
    },
    {
        "dateTime": "2024-03-02T13:00:00Z",
        "matchday": 27,
        "ended": false,
        "homeTeam": "Man City",
        "result": null,
        "awayTeam": "Man United",
        "note": "Manchester derby"
    },
    {
        "dateTime": "2024-03-16T15:00:00Z",
        "matchday": 29,
        "ended": false,
        "homeTeam": "Arsenal",
        "result": null,
        "awayTeam": "Chelsea",
        "note": "London derby"
    },
    {
        "dateTime": "2024-04-06T15:00:00Z",
        "matchday": 32,
        "ended": false,
        "homeTeam": "Man United",
        "result": null,
        "awayTeam": "Liverpool",
        "note": "North West derby"
    },
    {
        "dateTime": "2024-04-27T15:00:00Z",
        "matchday": 35,
        "ended": false,
        "homeTeam": "Tottenham",
        "result": null,
        "awayTeam": "Arsenal",
        "note": "North London derby"
    }
]
`;

// Parse the JSON string
const derbies = JSON.parse(derbiesString);
console.log(typeof derbies, derbies);

// Get the output element
const outputElement = document.getElementById("data-output");

// Initialize an empty output string
let output = "";

// Loop through each derby object
for (const derby of derbies) {
    // Format date and time for display
    const date = new Date(derby.dateTime).toLocaleDateString(navigator.language, {month: 'short', day: 'numeric', year: 'numeric'});
    const time = new Date(derby.dateTime).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

    // Handle null result
    const result = derby.result === null ? "TBD" : derby.result;

    // Build HTML table row
    output += `
        <tr>
            <td>${date}
            <td>${time}
            <td>${derby.matchday}
            <td>${derby.homeTeam}
            <td>${result}
            <td>${derby.awayTeam}
            <td>${derby.note}
        </tr>
    `;
    }
    // Update the output element with the generated HTML
    outputElement.innerHTML = output;

    // Display client timezone information
    const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("time-zone").textContent = `${timeZoneName}`;