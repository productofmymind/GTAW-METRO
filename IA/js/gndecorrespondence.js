$(document).ready(function () {
    // Initialize Semantic UI components
    $('.ui.checkbox').checkbox();
    $('.ui.radio.checkbox').checkbox();
    $('.ui.dropdown').dropdown(); // Initialize Semantic UI dropdown

    // Handle the "Submit" button click
    $('#submit').click(function () {
        console.log('Submit button clicked'); // Debugging line

        // Collect form values
        const Month = $('#Month').val() || '';
        const Date = $('#Date').val() || '';
        const Year = $('#Year').val() || '';
        const Name = $('#Name').val() || ''; // Add a field for recipient name
        const Message = $('#Message').val() || ''; // Add a field for the main body text
        const Number = $('#Number').val() || ''; 
        const RankNameInformation = $('#RankNameInformation').val() || '';
        const AssignmentInformation = $('#AssignmentInformation').val() || '';
        const SignatureNameRank = $('#SignatureNameRank').val() || '';
        const BadgeNumberInformation = $('#BadgeNumberInformation').val() || '';
        const SignatureImage = $('#SignatureImage').val() || '';
        const FirstName = $('#FirstName').val() || '';
        const LastName = $('#LastName').val() || '';
        const CivilServiceRank = $('#CivilServiceRank').val() || '';
        const DivisionRank = $('#DivisionRank').val() || '';
        const CFNumber = $('#CFNumber').val() || ''; // Add a field for CF number

        // Create the BBCode output text
        let output = `[divbox3=white,0,transparent,5,14,14][nletterhead][/nletterhead]
[color=black][font=Arial]
${Month} ${Date}, ${Year}`;

        // Add CF number only if it's provided
        if (Number) {
            output += ` [aligntable=right,0,0,0,0,0,0]CF No. ${Number}[/aligntable]`;
        }

        output += `

Dear ${Name},


[justify]${Message}

If you have any questions concerning this matter, please contact ${RankNameInformation}, ${AssignmentInformation} at ${BadgeNumberInformation}@lspd.online.[/justify]
Respectfully,

DWAYNE BURKE
Chief of Police`;

        // Add [img][/img] and signature details only if the SignatureImage field is not empty
        if (SignatureImage) {
            output += `

[img]${SignatureImage}[/img]`;
        }

        output += `

${SignatureNameRank}
${DivisionRank}
Internal Affairs Division

[center][b][i]AN EQUAL EMPLOYMENT OPPORTUNITY EMPLOYER
[url=]www.LSPDOnline.org
www.joinLSPD.com[/url]
[/i][/b][/center]
[/color][/font][/divbox3]`;

        // Set the output text to the textarea
        $('#Narrative').val(output);
    });

    // Handle the "Copy to Clipboard" button click
    $('#copy').click(function () {
        const copyText = document.getElementById('Narrative');

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
        const month = currentDate.getMonth() + 1; // Months are zero-indexed
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
