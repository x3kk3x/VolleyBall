// Function to toggle accordion on button click
function toggleAccordion(index) {
  const accordionElement = document.getElementById(`accordion${index}`);
  if (accordionElement) {
    accordionElement.classList.toggle('hidden');

    // Get the team title element and toggle the 'text-left' class
    const teamTitle = accordionElement.previousElementSibling.querySelector('h3');
    teamTitle.classList.toggle('text-left', !accordionElement.classList.contains('hidden'));

    // Get all the team-member elements inside the accordion content and toggle the 'text-left' class
    const teamMembers = accordionElement.getElementsByClassName('team-member');
    for (let i = 0; i < teamMembers.length; i++) {
      teamMembers[i].classList.toggle('text-left', !accordionElement.classList.contains('hidden'));
    }
  }
}

// Function to switch between tabs
function switchTab(activeTabId, activeContentId) {
  const tabContents = document.querySelectorAll('[id$="Content"]');
  tabContents.forEach((content) => {
    content.classList.add("hidden");
  });

  const tabs = document.querySelectorAll('[id$="Tab"]');
  tabs.forEach((tab) => {
    tab.classList.replace("bg-blue-500", "bg-gray-300");
    tab.classList.replace("text-white", "text-black");
  });

  const activeTab = document.getElementById(activeTabId);
  activeTab.classList.replace("bg-gray-300", "bg-blue-500");
  activeTab.classList.replace("text-black", "text-white");

  const activeContent = document.getElementById(activeContentId);
  activeContent.classList.remove("hidden");
}

// Generate the HTML for each team and append it to the schedule content div
const scheduleContent = document.getElementById("scheduleContent");
teams.forEach((team, index) => {
  const teamHTML = generateTeamHTML(team, index);
  scheduleContent.innerHTML += teamHTML;
});

// Call the function to populate the team vs team inputs for the Matches tab
const matchesContent = document.getElementById("matchesContent");
matchesContent.innerHTML = generateMatchesTabHTML();

// Function to show the tooltip
function showTooltip() {
  const tooltip = document.getElementById("tooltip");
  tooltip.classList.remove("hidden");
  setTimeout(() => {
    tooltip.classList.add("hidden");
  }, 3000);
}