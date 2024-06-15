$('.ui.checkbox').checkbox();

$('#submit').click(function () {
  // Get values from HTML form fields
  const dPlatoonChecked = $('#DPLT:checked').val() ? '[cb][/cb] D Platoon' : '';
  const k9PlatoonChecked = $('#K9PLT:checked').val() ? '[cb][/cb] K9 Platoon' : '';
  const hPlatoonChecked = $('#GED:checked').val() ? '[cb][/cb] H Platoon' : '';
  const icFullName = $('#OS').val() || '';
  const cnFullName = $('#AS').val() || '';
  const FOS = $('#FOS').val() || '';
  const tcFullName = $('#TC').val() || ''; // Assuming there's a field with id="TC" for Tactical Commander
  const mmMembers = $('#InvolvedMembers input')
    .map(function () {
      const memberName = $(this).val();
      return memberName ? `[*] ${memberName}` : '';
    })
    .get()
    .join('\n');
  const deploymentType = $('#DeploymentType .text').text() || '';
  const date = $('#datePicker').val() || '';
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
  let output = `
[divbox2=transparent]
  [aligntable=right,350,0,0,0,0,0][center][imgsize=150x150]https://i.imgur.com/EebhRu7.png[/imgsize] [imgsize=150x150]https://i.imgur.com/p8CFN7i.png[/imgsize][/center][/aligntable]
  
  
  [br][/br]
  [center][size=170][b]WOLF PACK DETAIL[/b][/size]
  [size=110]OPERATION REPORT[/size][/center]
  [br]
  
  
  [divbox=black][b][size=110][color=#FFFFFF]1. GENERAL INFORMATION[/color][/size][/b]
  [/divbox]
  [indent=10][u]1.1[/u] [b]DETAILS PRESENT:[/b]
  [list]
  ${platoonsList}
  [/list]
  
  [u]1.2[/u] [b]SUPERVISOR(S):[/b]
  [list][*] [b]OPERATION SUPERVISOR:[/b] ${icFullName}
  [*] [b]ADDITIONAL SUPERVISOR(S):[/b] ${cnFullName}
  [*] [b]TACTICAL COMMANDER:[/b] ${tcFullName}[/list]
  
  [u]1.3[/u] [b]PERSONNEL PRESENT:[/b]
  [list]
  ${mmMembers}
  [/list]
  
  [divbox=black][b][size=110][color=#FFFFFF]2. OPERATION INFORMATION[/color][/size][/b]
  [/divbox]
  [indent=10][u]2.1[/u] [b]DATE:[/b] ${date}
  [u]2.2[/u] [b]LOCATION:[/b] ${location}
  [u]2.3[/u] [b]TIMELINE:[/b]
  [list][*][b]START OF DEPLOYMENT:[/b] ${startTime}
  [list]${deploymentEvents}[/list]
  [*][b]END OF DEPLOYMENT:[/b] ${endTime}[/list][/indent]
  
  [br][/br]
  [divbox=black][/divbox]
  [br][/br]
  [aligntable=left,200,0,0,0,0,0][center][b]FILING OFFICER SIGNATURE[/b]
  [i]${FOS}[/i][/center]
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

$('#copy').click(function() {
    
  var copyText = document.getElementById('output');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

});
