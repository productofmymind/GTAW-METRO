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
        const ToRankName = $('#ToRankName').val() || '';
        const ToSerialNo = $('#ToSerialNo').val() || '';
        const ToDivision = $('#ToDivision').val() || '';
        const FromRankName = $('#FromRankName').val() || '';
        const FromSerialNo = $('#FromSerialNo').val() || '';
        const FromDivision = $('#FromDivision').val() || '';
        const Subject = $('#Subject').val() || '';
        const RankNameContent = $('#RankNameContent').val() || '';
        const Message = $('#Message').val() || '';
        const RankNameInformation = $('#RankNameInformation').val() || '';
        const AssignmentInformation = $('#AssignmentInformation').val() || '';
        const BadgeNumberInformation = $('#BadgeNumberInformation').val() || '';
        const SignatureImage = $('#SignatureImage').val() || '';
        const SignatureNameRank = $('#SignatureNameRank').val() || '';
        const DivisionRank = $('#DivisionRank').val() || '';
        const Division = $('#Division').val() || '';
        const Narrative = $('#Narrative').val() || '';

        // Create the BBCode output text for Criminal Interview Scheduling
        let output = `[font=Times][color=black][center][b]INTRADEPARTMENTAL CORRESPONDENCE[/b][/center]
${Month} ${Date}, ${Year}

[b]TO:[space=100][/b] ${ToRankName}, Serial No. ${ToSerialNo}, ${ToDivision}

[b]FROM:[space=78][/b] ${FromRankName}, Serial No. ${FromSerialNo}, Internal Affairs Division

[b]SUBJECT:[space=59][/b] [ucase]Criminal Interview Scheduling — CF No. ${Subject}[/ucase]

${ToRankName},

It has been determined that you must attend a criminal interview with a Complaint Investigator from the Internal Affairs Division. I request that you provide at least one week of availability, beginning from the date you open this e-mail.

During your interview, you will be provided your Miranda Rights. As such, you are entitled to representation during your interview. You may find guidance on obtaining representation [url=https://lspd.gta.world/viewforum.php?f=18]here[/url]. You may also waive this representation, should you so choose.

You have 72 hours from the time this e-mail is sent to respond and provide a reasonable timeframe of availability. Failure to respond to this e-mail without an approved Leave of Absence or appropriate exigent circumstances may result in you being placed on Administrative Leave until an interview can be arranged.

[ooc]In the event of Out of Character scheduling delays, please reach out as soon as possible.[/ooc]

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