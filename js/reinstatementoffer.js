$(document).ready(function () {
  // Initialize Semantic UI checkboxes, radio buttons, and dropdowns
  $('.ui.checkbox').checkbox();
  $('.ui.radio.checkbox').checkbox();
  $('.ui.dropdown').dropdown(); // Initialize Semantic UI dropdown

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
    const AssignmentOffer = $('#AssignmentOffer').val() || '';
    const Division = $('#Division').val() || '';
    const Rank = $('#Rank .text').text() || '';
    

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

[b]Request for Reinstatement — Official Job Offer[/b]

[justify]Thank you for your interest in a rewarding career with the Los Santos Police Department. 

After careful consideration of your application and qualifications throughout the selection process, we are delighted to inform you that you have been selected for the position of [b]${Rank}[/b], [b]${AssignmentOffer}[/b] with the Los Santos Police Department. This position includes the base annual gross salary, notwithstanding hazard pay.

To accept this job offer, please reply to this correspondence with your signed acceptance. The Los Santos Police Department Personnel Division shall schedule your background investigation, medical examination, employee orientation, training and probationary expectations, and the completion of pre-employment requirements, including the Department and Division Manual Declarations, and any other relevant paperwork.

On behalf of the City of Los Santos, we would like to congratulate you on your selection for this position with the Los Santos Police Department.

It is incumbent upon you to terminate your employment with any Department within the County of Los Santos before formally accepting this offer.

Should you have any questions concerning this matter, please contact ${ContactPerson} at ${BadgeNumber}@lspd.online.

Respectfully,

DWAYNE BURKE
Chief of Police`;

    // Replace <RANK> placeholder with selected rank
    const rankMap = {
      'Rank1': 'Police Officer I',
      'Rank2': 'Police Officer II',
      'Rank3': 'Police Officer III',
      'Rank4': 'Police Officer III+1',
      'Rank5': 'Police Detective I',
      'Rank6': 'Police Detective II',
      'Rank7': 'Police Detective III',
      'Rank8': 'Police Sergeant I',
      'Rank9': 'Police Sergeant II',
      'Rank10': 'Police Lieutenant I',
      'Rank11': 'Police Lieutenant II',
      'Rank12': 'Police Captain I',
      'Rank13': 'Police Captain II',
      'Rank14': 'Police Captain III',
      'Rank15': 'Police Commander',
      'Rank16': 'Deputy Chief of Police',
      'Rank17': 'Assistant Chief of Police',
      'Rank18': 'Chief of Police'
    };
    const selectedRank = rankMap[Rank] || '<RANK>';
    output = output.replace('<RANK>', selectedRank);

    // Add [img][/img] and signature details only if the SignatureImage field is not empty
    if (SignatureImage) {
      output += `

[img]${SignatureImage}[/img]`;
    }

    // Add Assignment and Division details
    output += `

${SignatureNameRank},
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
