$(document).ready(function () {
  // Initialize Semantic UI checkboxes and radio buttons
  $('.ui.checkbox').checkbox();
  $('.ui.radio.checkbox').checkbox();

  // Handle the "Submit" button click
  $('#submit').click(function () {
    // Collect form values
    const FirstnameLastname = $('#FirstnameLastname').val() || '';
    const ContactPerson = $('#ContactPerson').val() || '';
    const BadgeNumber = $('#BadgeNumber').val() || '';
    const SignatureImage = $('#SignatureImage').val() || ''; // If this should be included in the output
    const SignatureNameRank = $('#SignatureNameRank').val() || ''; 
    const Year = $('#Year').val() || '';
    const Date = $('#Date').val() || '';
    const Month = $('#Month').val() || '';
    const Assignment = $('#Assignment').val() || '';
    const Division = $('#Division').val() || '';

    // Convert month number to month name
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthIndex = parseInt(Month, 10) - 1;
    const monthName = monthNames[monthIndex] || Month;

    // Create the output text
    let output = `[divbox3=white,0,transparent,5,14,14][nletterhead][/nletterhead]
[color=black][font=Arial]
${monthName} ${Date}, ${Year}

${FirstnameLastname}

[b]Request for Reinstatement — Received[/b]


[justify]Thank you for submitting an application to reinstate to the Los Santos Police Department. Your application has been received by the Department and will be reviewed in detail by a Background Investigator.

The selection process of the City of Los Santos is contingent upon a comprehensive background investigation, which includes a review of your personal, educational, and work history. This is a critical process in validating your qualifications and ensuring the safety and security of the Department, its employees, and the citizens of Los Santos.

The application review process may take up to five business days. We will contact you if we require any additional information or clarification relative to your application and/or personal history.

If you have any questions or concerns about the status of your application, please contact ${ContactPerson} at ${BadgeNumber}@lspd.online.

Respectfully,

DWAYNE BURKE
Chief of Police`;

    // Add [img][/img] and signature details only if the SignatureImage field is not empty
    if (SignatureImage) {
      output += `

[img]${SignatureImage}[/img]`;
    }

    // Add Assignment and Division details
    output += `

${SignatureNameRank}
${Assignment}
${Division}

[center][b][i]AN EQUAL EMPLOYMENT OPPORTUNITY EMPLOYER
[url=]www.LSPDOnline.org
www.joinLSPD.com[/url]
[/i][/b]
[/color][/font][/divbox3]`;

    // Set the output text to the textarea
    $('#Narrative').val(output);
  });

  // Handle the "Copy to Clipboard" button click
  $('#copy').click(function () {
    var copyText = document.getElementById('Narrative');

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value).then(function () {
      console.log('Text copied to clipboard');
    }).catch(function (err) {
      console.error('Failed to copy text: ', err);
    });
  });

  // Set today's date in the date picker when the button is clicked
  $('#todayButton').click(function () {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = String(currentDate.getDate()).padStart(2, '0');

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[month - 1];

    // Set the date values to the individual fields
    $('#Year').val(year);
    $('#Month').val(monthName);
    $('#Date').val(day);
  });
});
