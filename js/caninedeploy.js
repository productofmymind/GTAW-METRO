  $('.ui.radio.checkbox').checkbox();
  
  $('#submit').click(function () {
    const HandlerName = $('#HandlerName').val() || '';
    const K9Name = $('#K9Name').val() || '';
    const K9Specialization = $('#K9SpecializationInput').val() || '';
    const DivisionalRank = $('#DivisionalRankInput').val() || '';
    const SerialNumber = $('#SerialNumber').val() || '';
    const StreetName = $('#StreetNameInput').val() || '';
    const DistrictName = $('#DistrictNameInput').val() || '';
    const DeploymentType = $('#DeploymentTypeInput').val() || '';
    const PositiveAlert = $('#PositiveAlertInput').val() || '';
    const ItemsLocated = $('#ItemsLocated').val() || '';
    const Narrative = $('#Narrative').val() || '';
    const Signature = $('#Narrative').val() || '';

    let output = `[divbox2=transparent]
    [aligntable=right,250,0,0,0,0,0][center][metrologo=150][k9platlogo=150][/center][/aligntable]
    
    [br][/br]
    [indent=10][size=150][b]METROPOLITAN DIVISION[/b][/size]
    [size=130]CANINE DEPLOYMENT REPORT[/size][/indent]
    [br][/br]
    
    [divbox=black][b][size=150][color=#FFFFFF]1. GENERAL INFORMATION[/color][/size][/b]
    [/divbox]
    [indent=10][b]1.1 | HANDLER NAME:[/b] ${HandlerName}
    [b]1.2 | K-9 NAME:[/b] ${K9Name}
    [b]1.3 | K-9 SPECIALIZATION:[/b] ${K9Specialization}
    [b]1.4 | DIVISIONAL RANK:[/b] ${DivisionalRank}
    [b]1.5 | SERIAL NUMBER:[/b] ${SerialNumber} [/indent]
    
    [divbox=black][b][size=150][color=#FFFFFF]2. INCIDENT SUMMARY[/color][/size][/b]
    [/divbox]
    [indent=10][b]2.1 | DATE & TIME:[/b] 
    [b]2.2 | LOCATION OF DEPLOYMENT:[/b] ${StreetName}, ${DistrictName}
    [b]2.3 | TYPE OF SEARCH:[/b] ${DeploymentType}
    [b]2.4 | POSITIVE ALERT:[/b] ${PositiveAlert}
    [b]2.5 | ITEMS LOCATED:[/b] ${ItemsLocated} [/indent]
    
    [divbox=black][b][size=150][color=#FFFFFF]3. INCIDENT NARRATIVE[/color][/size][/b]
    [/divbox]
    [indent=10][b]3.1 | NARRATIVE:[/b] ${$('#Narrative').val()}
    
    [b]3.2 | SIGNATURE:[/b] ${Signature}
    [/indent]
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
