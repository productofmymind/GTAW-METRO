$('.ui.radio.checkbox')
  .checkbox()
;

$('#submit').click(function () {
  const Red = $('#Red').val() || '';
  const Green = $('#Green').val() || '';
  const TotalPatrols = $('#TotalPatrols').val() || '';
  const TotalPatrols2 = $('#TotalPatrols2').val() || '';
  const TotalDeployments = $('#TotalDeployments').val() || '';
  const TotalDeployments2 = $('#TotalDeployments2').val() || '';

  let output = `[divbox2=white][center]
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
[i]Message Here[/i]

[hr][/hr]
[metrologo=25] [b]MONTHLY STATISTICS[/b]
[hr][/hr]

[center][b]TOTAL PATROLS[/b] 
[size=85] ${$('[name=TotalDeployments]').val()} |${$('[name=TotalDeployments2]').val()} [b][color=${$('#PatrolStatus').val()}][/color][/b][/size]

[b]TOTAL DEPLOYMENTS[/b] 
[size=85] ${$('[name=TotalDeployments]').val()} |${$('[name=TotalDeployments2]').val()} [b][color=${$('#DeploymentStatus').val()}][/color][/b][/size]

[/center]
[hr][/hr]
[metrologo=25] [b]PERSONNEL ACTIVITY ASSESSMENT[/b]
[hr][/hr]
[divbox2=transparent][b]Samuel Courtland — CANINE HANDLER[/b][color=transparent]person1[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsCourtland]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsCourtland]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsCourtland]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Robert Evans — CANINE HANDLER[/b][color=transparent]person3[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsEvans]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsEvans]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsEvans]:checked').val()}[/list][/divbox2][br][/br]

[divbox2=transparent][b]Jayson Sims — CANINE HANDLER[/b][color=transparent]person4[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsSims]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsSims]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsSims]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Lucas Estrada — CANINE HANDLER[/b][color=transparent]person5[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsEstrada]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsEstrada]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsEstrada]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Cole Sanders — CANINE HANDLER[/b][color=transparent]person6[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsSanders]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsSanders]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsSanders]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Anastasia Galiani — CANINE HANDLER[/b][color=transparent]person7[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsGaliani]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsGaliani]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsGaliani]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Alexandra Mirste — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsMirste]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsMirste]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsMirste]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Johnathan Campbell — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsCampbell]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsCampbell]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsCampbell]:checked').val()}

[/list][/divbox2][br][/br]

[divbox2=transparent][b]Lauren Sherman — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsSherman]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsSherman]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsSherman]:checked').val()}

[/list][/divbox2][br][/br]

[divbox2=transparent][b]Julian Marcelo — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsMarcelo]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsMarcelo]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsMarcelo]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Marlene Renaud — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsRenaud]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsRenaud]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsRenaud]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Miguel Ruano — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsRuano]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsRuano]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsRuano]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Marisa Zanotti — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsZanotti]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsZanotti]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsZanotti]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Michael Atwood — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsAtwood]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsAtwood]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsAtwood]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Samuel Collins— CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsCollins]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsCollins]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsCollins]:checked').val()}
[/list][/divbox2][br][/br]

[divbox2=transparent][b]Jackson Mayhew — CANINE HANDLER[/b][color=transparent]person8[/color]
[hr][/hr]
[list][b]PATROLS:[/b] ${$('[name=PatrolsMayhew]:checked').val()}
[*][b]DEPLOYMENTS:[/b] ${$('[name=DeploymentsMayhew]:checked').val()}
[*][b]TRAININGS:[/b] ${$('[name=TrainingsMayhew]:checked').val()}
[/list][/divbox2][br][/br]

[/divbox2]`

    $('#output').val(output);
});

$('#copy').click(function() {
    
  var copyText = document.getElementById('output');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

});
