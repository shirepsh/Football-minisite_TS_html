async function fetchData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }

  return response.json();
}

// Function to create a league card with league information
function createLeagueCard(league: any): HTMLElement {
  const card = document.createElement('div');
  card.classList.add('league-card');

  const cardContent = `
    <h3>${league.strLeague}</h3>
    <p>Sport: ${league.strSport}</p>
    <p>Alternate Name: ${league.strLeagueAlternate}</p>
    <button class="view-teams-button" data-league="${encodeURIComponent(league.strLeague)}">View Teams</button>
  `;

  card.innerHTML = cardContent;

  // Attach event listener to the button
  const viewTeamsButton = card.querySelector('.view-teams-button');
  if (viewTeamsButton) {
    viewTeamsButton.addEventListener('click', async () => {
      const leagueName = viewTeamsButton.getAttribute('data-league');
      if (leagueName) {
        try {
          const teams = await fetchTeams(leagueName);
          displayTeams(teams);
        } catch (error) {
          console.error('Error fetching teams:', error);
        }
      }
    });
  }

  return card;
}

// Function to create a list of teams with team information
function createTeamList(team: any): HTMLElement {
  const teamsList = document.createElement('ul');
  teamsList.classList.add('teams-list');

  team.teams.forEach((teamItem: any) => {
    const teamListItem = document.createElement('li');
    teamListItem.classList.add('team-item');

    // Create a button for each league to show  teams detailed information
    const viewTeamButton = document.createElement('button');
    viewTeamButton.innerText = 'View Team Details';
    viewTeamButton.addEventListener('click', () => showTeamDetails(teamItem));

    teamListItem.appendChild(viewTeamButton);

    // Display team name and logo
    teamListItem.innerHTML += `
      <img src="${teamItem.strTeamLogo}" alt="${teamItem.strTeam}" />
      <span>${teamItem.strTeam}</span>
    `;

    teamsList.appendChild(teamListItem);
  });

  return teamsList;
}

// Function to display detailed information about a team
function showTeamDetails(team: any) {
  // Example: Display team name and logo in an alert
  alert(`Team Name: ${team.strTeam}\nLogo: ${team.strTeamLogo}`);
}

// Function to fetch and display teams based on the API URL and display function
async function fetchAndDisplayData(apiUrl: string, containerId: string, displayFunction: (data: any) => HTMLElement) {
  try {
    const data = await fetchData(apiUrl);

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = ''; 

      const itemsToDisplay = data.teams || data.leagues; // Use teams if available, else use leagues
      itemsToDisplay.slice(0, 5).forEach((item: any) => {
        const card = displayFunction(item);
        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error(`Error fetching and displaying data for ${containerId}:`, error);
  }
}

// Function to initialize the app
async function init() {
  const leaguesApiUrl = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php';

  // Display leagues with buttons
  await fetchAndDisplayData(leaguesApiUrl, 'league-container', createLeagueCard);
}

// Call the init function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);

// Function to fetch teams based on the league name
async function fetchTeams(strLeague: string): Promise<Team[]> {
  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${strLeague.split(' ').join('%20')}`);
  const data = await response.json();
  const teamsInLeague: Team [] = data.teams.map((team: any) => ({
    name : team.strTeam,
    logo : team.strTeamBadge
  }));
  return teamsInLeague;
}

// Function to display teams in the team container
function displayTeams(teams: Team[]) {
  const teamContainer = document.getElementById('team-container');
  if (teamContainer) {
    teamContainer.innerHTML = ''; // Clear content

    teams.forEach((team) => {
      const teamCard = createTeamCard(team);
      teamContainer.appendChild(teamCard);
    });
  }
}

// Function to create a card for a team with team information
function createTeamCard(team: Team): HTMLElement {
  const card = document.createElement('div');
  card.classList.add('team-card');

  const cardContent = `
    <h3>${team.name}</h3>
    <img src="${team.logo}" alt="${team.name}" />
  `;

  card.innerHTML = cardContent;

  return card;
}

// Define the Team interface
interface Team {
  name: string;
  logo: string;
}
