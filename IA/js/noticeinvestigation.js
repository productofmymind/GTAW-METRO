$(document).ready(function () {
    // Initialize Semantic UI components
    $('.ui.checkbox').checkbox();
    $('.ui.radio.checkbox').checkbox();
    $('.ui.dropdown').dropdown(); // Initialize Semantic UI dropdown

    // Handle the "Submit" button click for the second BBCode generator
    $('#submit').click(function () {
        console.log('Submit button clicked'); // Debugging line

        // Collect form values
        const Month = $('#Month').val() || '';
        const Date = $('#Date').val() || '';
        const Year = $('#Year').val() || '';
        const ToRankName = $('#ToRankName').val() || '';
        const ToSerialNo = $('#ToSerialNo').val() || '';
        const ToDivision = $('#ToDivision').val() || '';
        const Subject = $('#Subject').val() || '';
        const FromRankName = $('#FromRankName').val() || '';
        const FromSerialNo = $('#FromSerialNo').val() || '';
        const FromDivision = $('#FromDivision').val() || '';
        const CFNumber = $('#CFNumber').val() || ''; // Complaint investigation CF No.
        const IncidentDescription = $('#IncidentDescription').val() || '';
        const RankNameInformation = $('#RankNameInformation').val() || '';
        const AssignmentInformation = $('#AssignmentInformation').val() || '';
        const BadgeNumberInformation = $('#BadgeNumberInformation').val() || '';
        const SignatureImage = $('#SignatureImage').val() || ''; // Signature image URL
        const SignatureNameRank = $('#SignatureNameRank').val() || '';
        const DivisionRank = $('#DivisionRank').val() || '';

        // Create the BBCode output text
        let output = `[font=Times][color=black][center][b]INTRADEPARTMENTAL CORRESPONDENCE[/b][/center]
${Month} ${Date}, ${Year}

[b]TO:[space=100][/b] ${ToRankName}, Serial No. ${ToSerialNo}, ${ToDivision}

[b]FROM:[space=78][/b] ${FromRankName}, Serial No. ${FromSerialNo}, Internal Affairs Division

[b]SUBJECT:[space=59][/b] [ucase]Notice of Complaint Investigation — CF No. ${Subject}[/ucase]

${ToRankName},

The Internal Affairs Division has begun an investigation in relation to ${IncidentDescription}. I am one of the investigators responsible for this investigation.

During the course of this investigation, you may be required to attend an interview with a Complaint Investigator from the Internal Affairs Division. You will be notified if such an interview is required. You will be notified via e-mail once this investigation has been concluded.

Per Department Manual section 3/309. Internal Investigations, you may not disclose the existence of this investigation to any unauthorized parties without explicit permission from Internal Affairs Division Command. This investigation may take time to resolve. As such, please refrain from inquiring about the status of the investigation unless absolutely necessary.

If you have any questions concerning this matter, please contact ${RankNameInformation}, ${AssignmentInformation} at ${BadgeNumberInformation}@lspd.online.

Respectfully,`;

        // Add [img][/img] and signature details only if the SignatureImage field is not empty
        if (SignatureImage) {
            output += `

[img]${SignatureImage}[/img]`;
        }

        output += `

${SignatureNameRank}
${DivisionRank}
Internal Affairs Division
[/font][/color]`;

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
