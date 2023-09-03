$('.ui.checkbox').checkbox();

$('#submit').click(function () {
  // Get values from HTML form fields
  const dPlatoonChecked = $('#DPLT:checked').val() ? '[*] D Platoon' : '';
  const k9PlatoonChecked = $('#K9PLT:checked').val() ? '[*] K9 Platoon' : '';
  const hPlatoonChecked = $('#HPLT:checked').val() ? '[*] H Platoon' : '';
  const icFullName = $('#ICname').val() || '';
  const cnFullName = $('#CNname').val() || '';
  const tcFullName = $('#TCname').val() || '';
  const mmMembers = $('#InvolvedMembers input')
    .map(function () {
      const memberName = $(this).val();
      return memberName ? `[*] ${memberName}` : '';
    })
    .get()
    .join('\n');
  const deploymentType = $('#DeploymentType .text').text() || '';
  const date = $('#datetimePicker').val() || '';
  const location = $('#loc').val() || '';
  const startTime = $('#startTime').val() || '';
  const endTime = $('#endTime').val() || '';
  const deploymentEvents = $('#DeploymentEventsContainer input')
    .map(function () {
      const eventName = $(this).val();
      return eventName ? `[*] ${eventName}` : '';
    })
    .get()
    .join('\n');
  const injuredTeamMembers = $('#InjuredMembers input')
    .map(function () {
      const memberName = $(this).val();
      return memberName ? `[*] ${memberName}` : '';
    })
    .get()
    .join('\n');
  const suspectCasualties = $('#InjuredSuspects input')
    .map(function () {
      const suspectName = $(this).val();
      return suspectName ? `[*] ${suspectName}` : '';
    })
    .get()
    .join('\n');
  const civilianCasualties = $('#InjuredCivilians input')
    .map(function () {
      const civilianName = $(this).val();
      return civilianName ? `[*] ${civilianName}` : '';
    })
    .get()
    .join('\n');
  const filingOfficerSignature = $('#signature').val() || '';

  // Combine the checked platoons into a single list
  const platoonsList = [dPlatoonChecked, k9PlatoonChecked, hPlatoonChecked].filter(Boolean).join('\n');

  // Create the report template with the user input values
  let output = `[divbox2=transparent]

  [aligntable=right,350,0,0,0,0,0][center][lspdlogo=150][/lspdlogo][metrologo=150][/metrologo][/center][/aligntable]
  
  
  [br][/br]
  [center][size=170][b]METROPOLITAN DIVISION[/b][/size]
  [size=150]DEPLOYMENT REPORT[/size][/center]
  [br]
  
  
  [divbox=black][b][size=150][color=#FFFFFF]1. GENERAL INFORMATION[/color][/size][/b]
  [/divbox]
  [indent=10][u]1.1[/u] [b]INVOLVED PLATOONS:[/b]
  [list]
  ${platoonsList}
  [/list]
  
  [u]1.2[/u] [b]INCIDENT COMMAND:[/b]
  [list][*] [b]INCIDENT COMMANDER (if applicable):[/b] ${icFullName}
  [*] [b]CRISIS NEGOTIATOR (if applicable):[/b] ${cnFullName}
  [*] [b]TACTICAL COMMANDER:[/b]
  [list][*] ${tcFullName}[/list][/list]
  
  [u]1.3[/u] [b]INVOLVED METROPOLITAN MEMBERS: [/b]
  [list]
  ${mmMembers}
  [/list]
  
  [u]1.4[/u] [b]DEPLOYMENT TYPE:[/b] ${deploymentType}[/indent]
  [divbox=black][b][size=150][color=#FFFFFF]2. DEPLOYMENT TIMELINE[/color][/size][/b]
  [/divbox]
  [indent=10][u]2.1[/u] [b]DATE:[/b] ${date}
  [u]2.2[/u] [b]LOCATION:[/b] ${location}
  [u]2.3[/u] [b]TIMELINE:[/b]
  [list][*][b]START OF DEPLOYMENT:[/b] ${startTime}
  [list]${deploymentEvents}[/list]
  [*][b]END OF DEPLOYMENT:[/b] ${endTime}[/list][/indent]
  [divbox=black][b][size=150][color=#FFFFFF]3. CASUALTY & INJURY INFORMATION[/color][/size][/b][/divbox]
  [indent=10][u]3.1[/u] [b]INJURED TEAM MEMBERS:[/b]
  [list]
  ${injuredTeamMembers}
  [/list]
  
  [u]3.2[/u] [b]SUSPECT CASUALTIES:[/b]
  [list]
  ${suspectCasualties}
  [/list]
  
  [u]3.3[/u] [b]CIVILIAN CASUALTIES:[/b]
  [list]
  ${civilianCasualties}
  [/list]
  
  [br][/br]
  [divbox=black][/divbox]
  [br][/br]
  [aligntable=left,200,0,0,0,0,0][center][b]FILING OFFICER SIGNATURE[/b]
  [i]${filingOfficerSignature}[/i][/center]
  [/aligntable][aligntable=left,721,0,0,0,0,0]
  [/aligntable]
  [br][/br]
  [br][/br]
  [/divbox2]`;

  $('#output').val(output);
});

$(document).ready(function () {
  // Initialize date-time picker
  $('#datetimePicker').datetimepicker({
    dateFormat: 'dd/M/yy', // Date format
    timeFormat: 'hh:mm TT', // Time format with AM/PM
  });

  // Define a function to handle the date-time selection
  $('#datetimePicker').on('change', function () {
    const selectedDateTime = $('#datetimePicker').val();
    if (selectedDateTime) {
      // Use selectedDateTime in your JavaScript logic
      console.log('Selected Date and Time:', selectedDateTime);
    }
  });
});
