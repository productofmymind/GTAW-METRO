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
        const Name = $('#Name').val() || '';
        const Number = $('#Number').val() || '';
        const Message = $('#Message').val() || '';
        const RankNameInformation = $('#RankNameInformation').val() || '';
        const AssignmentInformation = $('#AssignmentInformation').val() || '';
        const BadgeNumberInformation = $('#BadgeNumberInformation').val() || '';
        const SignatureImage = $('#SignatureImage').val() || '';
        const SignatureNameRank = $('#SignatureNameRank').val() || '';
        const DivisionRank = $('#DivisionRank').val() || '';

        // Create the BBCode output text for General Correspondence Non-Employee
        let output = `[divbox3=white,0,transparent,5,14,14][nletterhead][/nletterhead]
[color=black][font=Arial]
${Month} ${Date}, ${Year}`;

        // Add CF number only if it's provided
        if (Number) {
            output += ` [aligntable=right,0,0,0,0,0,0]CF No. ${Number}[/aligntable]`;
        }

        output += `

Dear ${Name},


[justify]It has been determined that you may have witnessed an incident that is the subject of an internal investigation by the Los Santos Police Department. As such, you are being requested to attend a witness interview with a Complaint Investigator from the Internal Affairs Division. I request that you provide at least one week of availability, beginning from the date you open this e-mail.

During your interview, you will be asked to make statements to investigators in relation to [brief description of the incident]. You do not have to attend this interview or make statements to investigators. In the event you decline to attend this interview, please inform us as soon as possible.

We request that you provide a response within 72 hours from the time this e-mail is sent and provide a reasonable timeframe of availability.

[ooc]In the event of Out of Character scheduling delays, please reach out as soon as possible.[/ooc]

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
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const day = currentDate.getDate();

        // Set the date values to the individual fields
        $('#Month').val(month);
        $('#Date').val(day);
        $('#Year').val(year);
    });

    // Save data to localStorage
    function saveDataToLocalStorage() {
        const data = {
            Month: $('#Month').val(),
            Date: $('#Date').val(),
            Year: $('#Year').val(),
            Name: $('#Name').val(),
            Number: $('#Number').val(),
            Message: $('#Message').val(),
            RankNameInformation: $('#RankNameInformation').val(),
            AssignmentInformation: $('#AssignmentInformation').val(),
            BadgeNumberInformation: $('#BadgeNumberInformation').val(),
            SignatureImage: $('#SignatureImage').val(),
            SignatureNameRank: $('#SignatureNameRank').val(),
            DivisionRank: $('#DivisionRank').val(),
            Narrative: $('#Narrative').val()
        };

        localStorage.setItem('metroDeploymentData', JSON.stringify(data));
    }

    // Load data from localStorage
    function loadDataFromLocalStorage() {
        const data = localStorage.getItem('metroDeploymentData');
        if (data) {
            const parsedData = JSON.parse(data);

            $('#Month').val(parsedData.Month);
            $('#Date').val(parsedData.Date);
            $('#Year').val(parsedData.Year);
            $('#Name').val(parsedData.Name);
            $('#Number').val(parsedData.Number);
            $('#Message').val(parsedData.Message);
            $('#RankNameInformation').val(parsedData.RankNameInformation);
            $('#AssignmentInformation').val(parsedData.AssignmentInformation);
            $('#BadgeNumberInformation').val(parsedData.BadgeNumberInformation);
            $('#SignatureImage').val(parsedData.SignatureImage);
            $('#SignatureNameRank').val(parsedData.SignatureNameRank);
            $('#DivisionRank').val(parsedData.DivisionRank);
            $('#Narrative').val(parsedData.Narrative);
        }
    }

    // Attach event listener for input changes
    $('input, textarea, select').on('change', saveDataToLocalStorage);

    // Load data on page load
    loadDataFromLocalStorage();

    // Clear local storage
    $('#clearLocalStorageButton').on('click', function() {
        const confirmation = confirm(
            "Are you sure you want to clear all local data?\n\n" +
            "This action will delete all stored data in your browser's local storage, including any unsaved work or settings. " +
            "If you're not sure, it's recommended to cancel this action."
        );

        if (confirmation) {
            const dataToBackup = localStorage.getItem('metroDeploymentData');
            localStorage.setItem('metroDeploymentDataBackup', dataToBackup);
            localStorage.removeItem('metroDeploymentData');
            alert("Local storage has been cleared.");
        }
    });

    // Undo clear local storage
    $('#undoLocalStorageButton').on('click', function() {
        const savedData = localStorage.getItem('metroDeploymentDataBackup');
        if (savedData) {
            localStorage.setItem('metroDeploymentData', savedData);
            alert("Clear action has been undone. Your data is restored.");
            location.reload();
        } else {
            alert("There is no data to restore.");
        }
    });
});
