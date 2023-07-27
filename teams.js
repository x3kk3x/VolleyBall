// Function to dynamically generate the team HTML
function generateTeamHTML(team, index) {
  const teamMembersHTML = team.members.map(member => `<p class="team-member text-left text-black">${member}</p>`).join('');

  return `
    <div class="team-section flex flex-col items-center md:flex-row md:items-center">
      <div class="w-16 h-16 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-4 flex-shrink-0">
        <img src="${team.image}" alt="">
      </div>
      <div class="text-center md:flex-grow">
        <h3 class="text-lg font-bold text-white">${team.name}</h3>
        <div id="accordion${index}" class="accordion-content hidden m-4 p-4 bg-gray-900 rounded">
          ${teamMembersHTML}
        </div>
      </div>
      <div class="mt-4 md:mt-0">
        <button class="px-4 py-2 bg-black text-white rounded border-white border-2 accordion-button" onclick="toggleAccordion(${index})">Team Members</button>
      </div>
    </div>
  `;
}
  // Function to dynamically populate the team members
  function populateTeamMembers(teamIndex) {
    const teamMembersList = document.querySelector(
      `#team-${teamIndex} .team-members`
    );
    teamMembersList.innerHTML = "";
  
    teams[teamIndex].members.forEach((member) => {
      const listItem = document.createElement("li");
      listItem.textContent = member;
      teamMembersList.appendChild(listItem);
    });
  }
  
  // Team data
  const teams = [
    {
      name: "PADINSKI PROBISVETI",
      image: "https://static.vecteezy.com/system/resources/previews/011/604/045/original/pp-logo-pp-design-blue-and-red-pp-letter-pp-letter-logo-design-initial-letter-pp-linked-circle-uppercase-monogram-logo-vector.jpg",
      members: ["Jan Chrtan - El Fuego", "Gajki", "Likuša Voljaka (asi)"],
    },
    {
      name: "ZAJEČARCI",
      image: "https://yt3.googleusercontent.com/ytc/AGIKgqMQIZNx47ZzziJg72e9LVnHPUBVdVg4NMTyC_yD=s900-c-k-c0x00ffffff-no-rj",
      members: ["Denis Markuš", "Pepi", "Klinac Voljaki"],
    },
    {
      name: "PILIĆARCI",
      image: "https://e7.pngegg.com/pngimages/462/393/png-clipart-others-chicken-logo-thumbnail.png",
      members: ["Dandi Indira Gandi", "Janki", "Boki"],
    },
    {
        name: "SHARKS",
        image: "https://t4.ftcdn.net/jpg/02/81/97/51/360_F_281975166_GCPD4KTptrg0tP7RGT6Xo8ueD6PwS3zZ.jpg",
        members: ["ŠARKI", "FROGGY", "LARA CROFT WISH"],
      },
      {
        name: "TIM ČMARULJA",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9Y4FKpCynCJ5PMlj1jM9hai4X61K3YvFnA&usqp=CAU",
        members: ["Slabi Petrovič", "Mocni", "Prejde"],
      },
  ];
  