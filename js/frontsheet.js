  $('.ui.radio.checkbox').checkbox();
  
  $('#submit').click(function () {
    const CFNo = $('#CFNo').val() || '';
    const Supervisor = $('#Supervisor').val() || '';
    const Investigators = $('#Investigators').val() || '';
    const Classification = $('#ClassificationInput').val() || '';
    const Summary = $('#Summary').val() || '';
    const DatePicker = $('#datePicker').val() || '';
    const TimePicker = $('#Time').val() || '';
    const Location = $('#Location').val() || '';
    const mmAllegations = $('#Allegations input')
    .map(function () {
      const allegation = $(this).val();
      return allegation ? `[*] ${allegation}` : '';
    })
    .get()
    .join('\n');
    const mmReportedEmployees = $('#ReportedEmployees input')
    .map(function () {
      const reportedEmployee = $(this).val();
      return reportedEmployee ? `[*] ${reportedEmployee}` : '';
    })
    .get()
    .join('\n');
    const mmComplainants = $('#Complainants input')
    .map(function () {
      const complainaint = $(this).val();
      return complainaint ? `[*] ${complainaint}` : '';
    })
    .get()
    .join('\n');
    const deptComplainant = $('#DEPT:checked').val() ? '[cbc]' : '[cb]';
    const mmWitnesses = $('#Witnesses input')
    .map(function () {
      const witness = $(this).val();
      return witness ? `[*] ${witness}` : '';
    })
    .get()
    .join('\n');

    const mmSubmissions = $('#Submissions input')
    .map(function () {
      const mmSubmission = $(this).val();
      return mmSubmission;
    })
    .get();

    function CreateSubmission(input) {
      var finalSubmission = '';
      for (let i = 0; i < input.length; i+=2) {
        var submissionLink = input[i];
        var submissionDesc = input[i+1];
        finalSubmission += '[url='+submissionLink+']'+submissionDesc+'[/url]' + '\n';
      }
      return finalSubmission.trimEnd();
    }

    const mmTasks = $('#Tasks input')
    .map(function () {
      const mmTask = $(this).val();
      return mmTask;
    })
    .get();

    function CreateTask(input) {
      var finalTask = '';
      for (let i = 0; i < input.length; i+=3) {
        var taskDesc = input[i];
        var taskAssigned = input[i+1];
        var taskStatus = input[i+2];
        finalTask += '[b]Task Description:[/b] ' + taskDesc + '\n' + '[list=none][b]Assigned:[/b] '+ taskAssigned + '\n'+ '\
[b]Status:[/b] ' + taskStatus + '[/list]' + '\n';
      }
      return finalTask.trimEnd();
    }

    const mmChronos = $('#Chrono input')
    .map(function () {
      const mmChrono = $(this).val();
      return mmChrono;
    })
    .get();

    function CreateChrono(input) {
      var finalChrono = '';
      for (let i = 0; i < input.length; i+=2) {
        var chronoDate = input[i];
        var chronoEntry = input[i+1];
        finalChrono += '[*][u]' + chronoDate + ': ' + chronoEntry + '[/u]' + '\n';
      }
      return finalChrono.trimEnd();
    }

    let output = `[center][size=150][b]INTERNAL AFFAIRS FILE
LOS SANTOS POLICE DEPARTMENT[/b][/size][/center]

[divbox=black][color=#FFFFFF][b]CASE FILE INFORMATION[/b][/color][/divbox]
[divbox=transparent]
[indent=10][b]CF No.:[/b] ${CFNo}
[b]Assigned Supervisor:[/b] ${Supervisor}
[b]Assigned Investigators:[/b] ${Investigators}
[b]Classification:[/b] ${Classification}
[b]Brief Summary:[/b] ${Summary}[/indent]
[/divbox]
[divbox=black][color=#FFFFFF][b]INCIDENT DETAILS[/b][/color][/divbox]
[divbox=transparent]
[indent=10][b]Date:[/b] ${DatePicker}
[b]Time:[/b] ${TimePicker} Hours
[b]Location:[/b] ${Location}
[b]Allegations:[/b]
[list]${mmAllegations}[/list][/indent]
[/divbox]
[divbox=black][color=#FFFFFF][b]INVOLVED PARTIES[/b][/color][/divbox]
[divbox=transparent]
[indent=10][b]Reported Employees:[/b]
[list]${mmReportedEmployees}[/list]
[b]Complainant(s):[/b] ${deptComplainant} Department
[list]${mmComplainants}[/list]
[b]Witnesses:[/b]
[list]${mmWitnesses}[/list][/indent]
[/divbox]
[divbox=black][color=#FFFFFF][b]EVIDENCE SUBMISSIONS[/b][/color][/divbox]
[divbox=transparent]
[indent=10]
${CreateSubmission(mmSubmissions)}
[/indent]
[/divbox]
[divbox=black][color=#FFFFFF][b]TASK LIST[/b][/color][/divbox]
[divbox=transparent]
[indent=10]
${CreateTask(mmTasks)}
[/indent]
[/divbox]
[divbox=black][color=#FFFFFF][b]CHRONOLOGICAL RECORD[/b][/color][/divbox]
[divbox=transparent]
[list]
${CreateChrono(mmChronos)}[/list]
[/divbox]`;

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
