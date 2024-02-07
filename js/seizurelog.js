$(document).ready(function () {
  // Initialize Semantic UI dropdowns
  $('.ui.selection.dropdown').dropdown({
    fullTextSearch: true
  });

  // Handle the "Submit" button click
  $('#submit').click(function () {
    const Seizure = $("#Seizure .ui.dropdown").dropdown("get value");
    const DistrictName = $("#DistrictName .ui.dropdown").dropdown("get value");
    const StreetName = $("#StreetName .ui.dropdown").dropdown("get value");
    const TotalGuns = $("#TotalGuns").val();
    const TotalDrugs = $("#TotalDrugs").val();
    const Other = $("#Other").val();
    const Guns = $("#Guns").val();
    const Drugs = $("#Drugs").val();

    const output = `[divbox2=transparent][center][metrologo=150][/metrologo] [k9platlogo=150][/k9platlogo]
[size=150][b]MONTHLY SEIZURE LOG (FEBRUARY, 2024)[/b][/size]
[hr][/hr]

[b][size=120]SEIZURE/ARREST BOARD[/size][/b]
[size=85] ${Seizure}, ${DistrictName}, ${StreetName}, ${Guns} ${Drugs}[/size]

[b][size=120]TOTAL SEIZURE AMOUNTS[/size][/b]

[b]GUNS: TOTAL - [/b]${TotalGuns}

[b]DRUGS: TOTAL - [/b]${TotalDrugs}

[b]MISC:[/b] ${Other}

[/center][/divbox2]`;

    $('#output').val(output);
  });

  // Function to get values from input fields
  function getValuesFromInputFields(containerId) {
    return $(`${containerId} input`)
      .map(function () {
        return $(this).val();
      })
      .get()
      .join('\n');
  }
  
  // Handle the "Copy to Clipboard" button click
  $('#copy').click(function () {
    const copyText = document.getElementById('output');

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  });
});
