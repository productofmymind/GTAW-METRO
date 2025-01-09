$(document).ready(function () {
  // Initialize Semantic UI radio checkboxes
  $('.ui.radio.checkbox').checkbox();

  // Handle the "Submit" button click
  $('#submit').click(function () {
    const officers = $('#MetroOfficers input')
      .map(function () {
        const officerName = $(this).val();
        return officerName ? `${officerName}` : '';
      })
      .get()
      .join('\n');

    const patrolType = $('.ui.selection.search.dropdown .text').text() || 'Select Deployment Type';
    const date = $('#datePicker').val() || '';
    const lengthOfPatrol = $('#lop').val() || 'TIME'; // Default value
    const backupRequestsAttended = $('#backupRequestsAttended').val() || '';
    const subjectsArrested = $('#subjectsArrested').val() || '';
    const otherNotes = $('#other').val() || '';

    // Collect all deployment types dynamically
    const deployments = $('#Deployments input')
      .map(function () {
        const deploymentType = $(this).val();
        return deploymentType ? `[url=]${deploymentType}[/url]` : '';
      })
      .get()
      .join('\n');

    // Patrol Types array
    const patrolTypes = {
      'Canine Patrol': '[cb] Canine Patrol',
      'SWAT Crime Suppression Patrol': '[cb] SWAT Crime Suppression Patrol',
      'Joint Crime Suppression Patrol': '[cb] Joint Crime Suppression Patrol',
      'Gang Crime Suppression Patrol': '[cb] Gang Crime Suppression Patrol',
    };

    // Mark the selected patrol type with [cbc]
    if (patrolTypes[patrolType]) {
      patrolTypes[patrolType] = patrolTypes[patrolType].replace('[cb]', '[cbc]');
    }

    // Generate the formatted BBCode output
    let output = `[divbox2=transparent][font=Arial][center]LOS SANTOS POLICE DEPARTMENT
[size=120][b]METROPOLITAN DIVISION
PATROL REPORT[/b][/size][/center]

[b]1. Date of Patrol[/b] 
${date}

[b]2. Officers[/b]
${officers}

[b]3. Patrol Type[/b]
${Object.values(patrolTypes).join('\n')}

[b]4. Deployments[/b]
${deployments}

[b]5. Additional Information[/b]
${otherNotes}
[/divbox2]`;

    $('#output').val(output);
  });

  // Handle adding and removing input fields for Deployments
  $('#addInput1').click(function () {
    $('#Deployments').append(
      `<div class="field">
         <input type="text" placeholder="Deployment Type">
       </div>`
    );
  });

  $('#removeInput1').click(function () {
    $('#Deployments .field').last().remove();
  });

  // Handle the "Copy to Clipboard" button click
  $('#copy').click(function () {
    const copyText = document.getElementById('output');

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);
  });
});
