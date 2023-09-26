    $('.ui.search.dropdown').dropdown({
        fullTextSearch: true
    });

    // Handle the submit button click
    $('#submit').click(function () {
        const LSPDK9Checked = $('#LSPDK9:checked').val() ? '[*] LSPD K-9 Platoon' : '';
        const LSSDK9Checked = $('#LSSDK9:checked').val() ? '[*] LSSD Canine Services Detail' : '';
        const LSFDK9Checked = $('#LSFDK9:checked').val() ? '[*] LSFD USAR' : '';
        const SFMK9Checked = $('#SFMK9:checked').val() ? '[*] SFM ADC' : '';
        const SAPRK9Checked = $('#SAPRK9:checked').val() ? '[*] SAPR Canine' : '';
        
        const DeploymentType = $('#DeploymentTypeInput').val() || '';
        const icFullName = $('#ICname').val() || '';
        const divisionalRank = $('#DivisionalRankInput').val() || '';
        const serialNumber = $('#SerialNumber').val() || '';
        const datePicker = $('#datePicker').val() || '';
        const bittenName = $('#BittenName').val() || '';
        const injuryExtent = $('#InjuryExtent').val() || '';
        const fdAttendance = $('#FDAttendanceInput').val() || '';
        const LinkedDeployment = $('#LinkedDeployment').val() || '';
        const involvedMembers = $('#InvolvedMembersContainer input')
            .map(function () {
                const memberName = $(this).val();
                return memberName ? `[*] ${memberName}` : '';
            })
            .get()
            .join('\n');

        const narrative = $('#Narrative').val() || '';
        const signature = $('#K9EMTSignature').val() || '';

        const output = `[divbox2=transparent]
  
  [aligntable=right,350,0,0,0,0,0][center][metrologo=150][/metrologo][k9platlogo=150][/k9platlogo][/center][/aligntable]
  
  
  [br][/br]
  [center][size=170][b]METROPOLITAN DIVISION[/b][/size]
  [size=150]K-9 EMT PATIENT CARE REPORT[/size][/center]
  [br]
  
  
  [divbox=black][b][size=150][color=#FFFFFF]SECTION 1: GENERAL INFORMATION[/color][/size][/b][/divbox]
  [indent=10][u]1.1[/u] [b]PRIMARY EMT's NAME:[/b] ${icFullName}
  [u]1.2[/u] [b]PRIMARY EMT DEPT. RANK:[/b] ${divisionalRank}
  [u]1.3[/u] [b]OTHER INVOLVED MEDICALLY TRAINED OFFICERS:[/b][/indent]
  [list]
  ${involvedMembers}
  [/list]
  
  [indent=10][u]1.4a[/u] [b]DEPLOYMENT TYPE:[/b] ${DeploymentType}
  [u]1.4b[/u] [b]LINKED DEPLOYMENT:[/b] ${$('#LinkedDeployment').val()} [/indent]
  
  [divbox=black][b][size=150][color=#FFFFFF]SECTION 2: DEPLOYMENT INFORMATION[/color][/size][/b]
  [/divbox]
  [indent=10][u]2.1[/u] [b]DATE:[/b] ${datePicker}
  [u]2.2[/u] [b]DISTRICT NAME:[/b] ${$('#DistrictNameInput').val()}
  [u]2.3[/u] [b]START OF DEPLOYMENT:[/b] ${$('#startTime').val()}
  [/indent]
  
  [divbox=black][b][size=150][color=#FFFFFF]SECTION 3: PATIENT INFORMATION[/color][/size][/b]
  [/divbox]
  [indent=10]
  [u]3.1[/u] [b]PATIENT NAME:[/b] ${bittenName}
  [u]3.2[/u] [b]ASSIGNED HANDLER:[/b] ${$('#AssignedHandler').val()}
  [u]3.3[/u] [b]PATIENT AFFILIATION[/b]
  [list=none]
  ${LSPDK9Checked}
  ${LSSDK9Checked}
  ${LSFDK9Checked}
  ${SFMK9Checked}
  ${SAPRK9Checked}
  [/list]
  [u]3.5[/u] [b]PATIENT INJURIES:[/b] 
  [list]
  [*]${injuryExtent}
  
  [/list]
  
  [u]3.6[/u] [b]TREATMENT PROVIDED:[/b] ${$('#TreatmentProvided').val()}
  [list=1]
  [*]
  [/list]
  [/indent]
  [br][/br]
  [hr][/hr]
  
  [aligntable=left,200,0,0,0,0,0][center][b]K-9 EMT SIGNATURE[/b]
  [i]${signature}[/i][/center]
  
  [/aligntable][aligntable=right,230,1,0,0,0,0][center][b]SUPERVISOR SIGNATURE[/b]
  [i]HERE[/i]
  [color=transparent]..[/color][/center]
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
  