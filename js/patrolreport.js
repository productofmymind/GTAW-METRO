$(document).ready(function () {
  // Initialize Semantic UI radio checkboxes
  $('.ui.radio.checkbox').checkbox();

  // Handle the "Submit" button click
  $('#submit').click(function () {
    const officers = $('#MetroOfficers input')
      .map(function () {
        const officerName = $(this).val();
        return officerName ? `[*] ${officerName}` : '';
      })
      .get()
      .join('\n');

    const patrolType = $('.ui.selection.search.dropdown .text').text() || 'Select Deployment Type';
    const date = $('#datePicker').val() || '';
    const lengthOfPatrol = $('#lop').val() || 'TIME'; // You can update the default value as needed
    const backupRequestsAttended = $('#backupRequestsAttended').val() || '';
    const subjectsArrested = $('#subjectsArrested').val() || '';
    const other = $('#other').val() || '';
    const linkDeployment = $('#linkDeployment').val() || '';
    const typeDeployment = $('#typeDeployment').val() || '';

    // Create the report template with the user input values
    let output = `[divbox2=transparent]

  [aligntable=right,350,0,0,0,0,0][center][lspdlogo=150][/lspdlogo][metrologo=150][/metrologo][/center][/aligntable]
  
  
  [br][/br]
  [center][size=170][b]METROPOLITAN DIVISION[/b][/size]
  [size=150]PATROL REPORT[/size][/center]
  [br]
  
  
  [divbox=black][b][size=150][color=#FFFFFF]1. GENERAL INFORMATION[/color][/size][/b]
  [/divbox]
  [indent=10][u]1.1[/u] [b]METROPOLITAN OFFICERS:[/b][list]
  ${officers}
  [/list]
  [u]1.2[/u] [b]TYPE OF PATROL:[/b] ${patrolType}
  [u]1.3[/u] [b]DATE:[/b] ${date}
  [u]1.4[/u] [b]LENGTH OF PATROL:[/b] ${lengthOfPatrol}[/indent]
  [divbox=black][b][size=150][color=#FFFFFF]2. PATROL SUMMARY[/color][/size][/b]
  [/divbox]
  [u]2.1[/u] [b]SUBJECTS ARRESTED:[/b] ${subjectsArrested}
  [u]2.2[/u] [b]OTHER:[/b] 
  [list=none]${other}[/list]
  [u]2.3[/u] [b]TIED DEPLOYMENT(S):[/b] [list][*][url=${linkDeployment}]ACCESS[/url][/indent]
  [/divbox2]`;

    $('#output').val(output);
  });

  $('#datetimePicker').on('change', function () {
    const selectedDateTime = $('#datetimePicker').val();
    if (selectedDateTime) {
      // Use selectedDateTime in your JavaScript logic
      console.log('Selected Date and Time:', selectedDateTime);
    }
  });

// Handle the "Copy to Clipboard" button click
$('#copy').click(function () {
  const copyText = document.getElementById('output');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
});
});


