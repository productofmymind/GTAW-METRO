$('.ui.checkbox').checkbox();

$('#submit').click(function () {
  const dPlatoonChecked = $('#DPLT:checked').val() ? '[*] D Platoon' : '';
  const k9PlatoonChecked = $('#K9PLT:checked').val() ? '[*] K9 Platoon' : '';
  const hPlatoonChecked = $('#HPLT:checked').val() ? '[*] H Platoon' : '';
  const icFullName = $('#ICname').val() || '';
  const divisionalRank = $('#DivisionalRankInput').val() || '';
  const serialNumber = $('#SerialNumber').val() || '';
  const date = $('#datetimePicker').val() || '';
  const bittenName = $('#BittenName').val() || '';
  const injuryExtent = $('#InjuryExtent').val() || '';
  const fdAttendance = $('#FDAttendanceInput').val() || '';

  const involvedMembers = $('#InvolvedMembersContainer input')
    .map(function () {
      const memberName = $(this).val();
      return memberName ? `[*] ${memberName}` : '';
    })
    .get()
    .join('\n');

  const narrative = $('#Narrative').val() || '';
  const signature = $('#Signature').val() || '';

  const output = `[divbox2=transparent]
  [aligntable=right,250,0,0,0,0,0][center][metrologo=150][k9platlogo=150][/center][/aligntable]
  
  
  [br][/br]
  [indent=10][size=150][b]METROPOLITAN DIVISION[/b][/size]
  [size=130]CANINE BITE REPORT[/size][/indent]
  [br][/br]
  
  
  [divbox=black][b][size=150][color=#FFFFFF]1. GENERAL INFORMATION[/color][/size][/b]
  [/divbox]
  [indent=10][b]1.1 | NAME & ASSIGNED K-9:[/b] ${icFullName}
  [b]1.2 | DIVISIONAL RANK:[/b] ${divisionalRank}
  [b]1.3 | SERIAL NUMBER:[/b] ${serialNumber}[/indent]
  
  [divbox=black][b][size=150][color=#FFFFFF]2. INCIDENT SUMMARY[/color][/size][/b]
  [/divbox]
  [indent=10][b]2.1 | DATE & TIME:[/b] ${date}
  [b]2.2 | NAME OF BITTEN:[/b] ${bittenName}
  [b]2.3 | EXTENT OF INJURIES:[/b] ${injuryExtent}
  [b]2.4 | FD ATTENDANCE:[/b] ${fdAttendance}[/indent]
  
  [divbox=black][b][size=150][color=#FFFFFF]3. INCIDENT NARRATIVE[/color][/size][/b]
  [/divbox]
  [indent=10][b]3.1 | OTHER OFFICERS ON SCENE:[/b]
  [list]${involvedMembers}[/list]
  [b]3.2 | NARRATIVE:[/b]   ${narrative}
  

  [b]3.3 | SIGNATURE:[/b]   ${signature}
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

$('#copy').click(function () {
  var copyText = document.getElementById('output');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
});
