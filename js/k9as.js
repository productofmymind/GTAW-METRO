// Initialize radio checkboxes
$('.ui.radio.checkbox').checkbox();

// Function to generate and display the assessment
function generateAssessment() {
  // Get the output element
  var outputElement = document.getElementById('output');

  // Get values from form inputs
  const PatrolsColor = $('input[name="PatrolsColor"]:checked').val() || '';
  const DeploymentsColor = $('input[name="DeploymentsColor"]:checked').val() || '';
  const TotalPatrols = $('#TotalPatrols').val() || '';
  const TotalPatrols2 = $('#TotalPatrols2').val() || '';
  const TotalDeployments = $('#TotalDeployments').val() || '';
  const TotalDeployments2 = $('#TotalDeployments2').val() || '';
  const MessageOiC = $('#MessageOiC').val() || '';

  // Construct the assessment text
  let assessment = `[divbox2=white][center]
[k9platlogo=200]
[size=170][b]LOS SANTOS POLICE DEPARTMENT[/b][/size]
[size=130]METROPOLITAN DIVISION: K-9 PLATOON ACTIVITY ASSESSMENT[/size]
[/center]
[hr][/hr]
[metrologo=25] [b]INTRODUCTION[/b]
[hr][/hr]
[list=none]The Monthly Activity Assessment is a review of a platoon's activity at the end of each month. It gives an overview of the amount of deployments and general productivity of the platoon during that month and displays each officer's grading, based on a variable quota. The senior and command personnel of the Platoon compile the assessment, based on the written deployment reports and every officer's personnel log. The assessment gives an opportunity for officers to compare their performance to the rest of the platoon and acts as a tool for the department to notice and predict crime rates during certain periods of the year.[/list]
[hr][/hr]
[metrologo=25] [b]RECORDED AND GRADED AREAS[/b]
[hr][/hr]
[list=none]Displayed below is a list of all areas that are being graded based on the records we have of them. Next to each area, there is an explanation on how the average is being calculated.
[b]PATROLS[/b] - Canine Patrols fall under this area. The sum of all patrols will be divided by the total amount of personnel up to senior. This division will be split up in equal quarters which determine the quotas for this month. [i](i.e. 0 - 3, 4 - 6, 7 - 9, 10 - 12)[/i]
[b]DEPLOYMENTS[/b] - Deployments such as barricaded subjects or hostage situations fall under this area. This quota is determined by the platoon's supervisory team every month. The quota may change over time, depending on the increasing/decreasing activity.
[b]TRAININGS[/b] - Training such as Interior Search Trainings or Track and Trail Trainings fall under this area. The sum of all training will be split up in equal quarters which determine the quotas for this month.
[b]PERFORMANCE[/b] - Your performance during trainings & situations observed in-field, evaluated by the platoon supervisors.[/list]
[hr][/hr]
[metrologo=25] [b]GRADING SCORES[/b]
[hr][/hr]
[list=none] A list of all grading scores and their meaning or value determined by us is displayed below.
[b][color=#0000FF]ABOVE & BEYOND[/color][/b] - The effort put in for the month was way above the expectations, reflected in exceptional results.
[b][color=#00BF00]GOOD[/color][/b] - The effort put in for the month was above the expectations and there is nothing to note.
[b][color=#FFBF40]ACCEPTABLE[/color][/b] - The effort put in for the month has led to meeting the bare minimum, however there is room for improvement.
[b][color=#FF0000]POOR[/color][/b] - Bare minimum for the month was not met.[/list]
[hr][/hr]
[metrologo=25] [b]MESSAGE FROM THE OFFICER IN CHARGE[/b]
[hr][/hr]
[i]${MessageOiC}[/i]
[hr][/hr]
[metrologo=25] [b]MONTHLY STATISTICS[/b]
[hr][/hr]
[center][b]TOTAL PATROLS[/b] 
[size=85] ${TotalPatrols} | [b][color=${PatrolsColor}]${TotalPatrols2}[/color][/size][/b]
[b]TOTAL DEPLOYMENTS[/b] 
[size=85] ${TotalDeployments} | [b][color=${DeploymentsColor}]${TotalDeployments2}[/color][/size][/b]
[/center]
[hr][/hr]
[metrologo=25] [b]PERSONNEL ACTIVITY ASSESSMENT[/b]
[hr][/hr]`;

  // Array of personnel handlers
  const handlers = [
    { name: "Samuel Courtland — CANINE HANDLER", patrol: $('input[name="PatrolsCourtland"]:checked').val(), deployment: $('input[name="DeploymentsCourtland"]:checked').val(), training: $('input[name="TrainingsCourtland"]:checked').val() },
    { name: "Robert Evans — CANINE HANDLER", patrol: $('input[name="PatrolsEvans"]:checked').val(), deployment: $('input[name="DeploymentsEvans"]:checked').val(), training: $('input[name="TrainingsEvans"]:checked').val() },
    { name: "Jayson Sims — CANINE HANDLER", patrol: $('input[name="PatrolsSims"]:checked').val(), deployment: $('input[name="DeploymentsSims"]:checked').val(), training: $('input[name="TrainingsSims"]:checked').val() },
    { name: "Lucas Estrada — CANINE HANDLER", patrol: $('input[name="PatrolsEstrada"]:checked').val(), deployment: $('input[name="DeploymentsEstrada"]:checked').val(), training: $('input[name="TrainingsEstrada"]:checked').val() },
    { name: "Cole Sanders — CANINE HANDLER", patrol: $('input[name="PatrolsSanders"]:checked').val(), deployment: $('input[name="DeploymentsSanders"]:checked').val(), training: $('input[name="TrainingsSanders"]:checked').val() },
    { name: "Alexandra Mirste — CANINE HANDLER", patrol: $('input[name="PatrolsMirste"]:checked').val(), deployment: $('input[name="DeploymentsMirste"]:checked').val(), training: $('input[name="TrainingsMirste"]:checked').val() },
    { name: "Lauren Sherman — CANINE HANDLER", patrol: $('input[name="PatrolsSherman"]:checked').val(), deployment: $('input[name="DeploymentsSherman"]:checked').val(), training: $('input[name="TrainingsSherman"]:checked').val() },
    { name: "Marlene Renaud — CANINE HANDLER", patrol: $('input[name="PatrolsRenaud"]:checked').val(), deployment: $('input[name="DeploymentsRenaud"]:checked').val(), training: $('input[name="TrainingsRenaud"]:checked').val() },
    { name: "Miguel Ruano — CANINE HANDLER", patrol: $('input[name="PatrolsRuano"]:checked').val(), deployment: $('input[name="DeploymentsRuano"]:checked').val(), training: $('input[name="TrainingsRuano"]:checked').val() },
    { name: "Marisa Zanotti — CANINE HANDLER", patrol: $('input[name="PatrolsZanotti"]:checked').val(), deployment: $('input[name="DeploymentsZanotti"]:checked').val(), training: $('input[name="TrainingsZanotti"]:checked').val() },
    { name: "Michael Atwood — CANINE HANDLER", patrol: $('input[name="PatrolsAtwood"]:checked').val(), deployment: $('input[name="DeploymentsAtwood"]:checked').val(), training: $('input[name="TrainingsAtwood"]:checked').val() },
    { name: "Samuel Collins — CANINE HANDLER", patrol: $('input[name="PatrolsCollins"]:checked').val(), deployment: $('input[name="DeploymentsCollins"]:checked').val(), training: $('input[name="TrainingsCollins"]:checked').val() },
    { name: "Jackson Mayhew — CANINE HANDLER", patrol: $('input[name="PatrolsMayhew"]:checked').val(), deployment: $('input[name="DeploymentsMayhew"]:checked').val(), training: $('input[name="TrainingsMayhew"]:checked').val() }
  ];

  // Iterate through handlers and add their information to the assessment
  for (const handler of handlers) {
    assessment += `
[divbox2=transparent][b]${handler.name}[/b][color=transparent]person1[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${handler.patrol}
[*][b]DEPLOYMENTS:[/b] ${handler.deployment}
[*][b]TRAININGS:[/b] ${handler.training}
[/list][/divbox2][br][/br]
`;
  }

  // Close the assessment
  assessment += '[/divbox2]';

  // Set the generated assessment text to the output element
  outputElement.value = assessment;
}

// Click event handler for the "Submit" button
$('#submit').click(generateAssessment);

// Click event handler for the "Copy" button
$('#copy').click(function () {
  var copyText = document.getElementById('output');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
});
