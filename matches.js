
// Check if the input date string has three parts (day, month, and year) separated by hyphens
function convertToISODate(dateString) {
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const [day, month, year] = parts;
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      const paddedDay = day.padStart(2, '0');
      const paddedMonth = month.padStart(2, '0');
      return `${year}-${paddedMonth}-${paddedDay}`;
    }
  }

  return dateString;
}

// Matches data
const matches = [
  {
    team1: "PADINSKI PROBISVETI",
    team2: "IDEMO DO DNA",
    date: convertToISODate("21-07-2023"),
    time: "18:00",
  },
  {
    team1: "ZAJEČARCI",
    team2: "PADINSKI PROBISVETI",
    date: convertToISODate("02-08-2023"),
    time: "15:30",
  },
  {
    team1: "IDEMO DO DNA",
    team2: "ZAJEČARCI",
    date: convertToISODate("05-08-2023"),
    time: "17:30",
  },
  {
    team1: "SHARKS",
    team2: "PILIĆARCI",
    date: convertToISODate("05-08-2023"),
    time: "18:30",
  },
  {
    team1: "TIM ČMARULJA",
    team2: "PADINSKI PROBISVETI",
    date: convertToISODate("06-08-2023"),
    time: "17:30",
  },
  {
    team1: "IDEMO DO DNA",
    team2: "SHARKS",
    date: convertToISODate("07-08-2023"),
    time: "17:30",
  },
  {
    team1: "ZAJEČARCI",
    team2: "PILIĆARCI",
    date: convertToISODate("07-08-2023"),
    time: "18:30",
  },
  {
    team1: "ZAJEČARCI",
    team2: "PILIĆARCI",
    date: convertToISODate("07-08-2023"),
    time: "18:30",
  },
];

// Function to generate team vs team input HTML
function generateTeamVsTeamInput(team1, team2, date, time) {
  const dayOfWeek = new Date(date).toLocaleDateString('sr-Latn-RS', { weekday: 'long' });

  // Convert date to day/month/year format
  const dateParts = date.split('-');
  const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

  return `
    <div class="match-group border border-white rounded-md mb-4">
      <div class="match-info px-2 py-1 bg-white text-gray-800">${formattedDate}</div>
      <div class="flex flex-col md:flex-row justify-center items-center p-2">
        <div class="w-5/5">
          <input
            type="text"
            class="team-input w-full p-2 text-center bg-gray-800 rounded-md text-white mb-2 md:mb-0 md:mr-2"
            value="${team1}"
            disabled
          />
        </div>
        <span class="text-2xl mx-2 md:mx-4">vs</span>
        <div class="w-5/5">
          <input
            type="text"
            class="team-input w-full p-2 text-center bg-gray-700 rounded-md text-white"
            value="${team2}"
            disabled
          />
        </div>
      </div>
      <div class="match-info px-2 py-1 bg-white text-xl text-gray-800">${time} | ${dayOfWeek}</div>
    </div>
  `;
}

// Function to generate the HTML for the second tab (Matches tab)
function generateMatchesTabHTML() {
  let matchesHTML = '';

  // Group matches by date
  const matchesByDate = {};
  matches.forEach((match) => {
    const date = match.date;
    if (!matchesByDate[date]) {
      matchesByDate[date] = [];
    }
    matchesByDate[date].push(match);
  });

  // Generate the team vs team input for each date group
  Object.entries(matchesByDate).forEach(([date, matches]) => {
    let dateHTML = '';
    matches.forEach((match) => {
      dateHTML += generateTeamVsTeamInput(match.team1, match.team2, match.date, match.time);
    });
    matchesHTML += `<div class="mb-4">${dateHTML}</div>`;
  });

  return matchesHTML;
}