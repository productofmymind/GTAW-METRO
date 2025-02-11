$(document).ready(function () {
  let fleetData = []; // Stores the loaded fleet data
  let missionRowDetails = [
    "Fugitive Apprehension Detail" 
  ];

  // Initialize Select2 for dropdowns
  $('#divisionFilter, #vehicleFilter, #detailFilter').select2();

  // Fetch the vehicle data (assuming JSON format)
  function loadFleetData() {
    $.getJSON("../MRD/js/fleet.json", function (data) {
      fleetData = data;
      console.log("Fleet data loaded successfully:", fleetData); // Debugging
      populateDivisionDropdown();
      displayAllVehicles(); // Show all vehicles by default
    }).fail(function (jqxhr, textStatus, error) {
      console.error("Failed to load fleet data:", textStatus, error);
    });
  }

  // Populate Division dropdown
  function populateDivisionDropdown() {
    let divisions = [...new Set(fleetData.map(vehicle => vehicle.division))];
    let divisionFilter = $("#divisionFilter");

    divisionFilter.empty().append('<option value="">Select Division</option>');
    divisionFilter.append(divisions.map(division => `<option value="${division}">${division}</option>`));
    console.log("Division dropdown populated:", divisions); // Debugging
  }

  // Populate Detail dropdown based on Mission Row Division selection
  $('#divisionFilter').on("change", function () {
    let selectedDivision = $(this).val();
    let detailFilter = $("#detailFilter");

    // Clear previous details and hide the detail dropdown
    detailFilter.empty().append('<option value="">Select Detail</option>');
    $('#detailDropdownRow').hide();

    if (selectedDivision === "Mission Row Division") {
      // Show the detail dropdown and populate it with Mission Row details
      $('#detailDropdownRow').show();
      missionRowDetails.forEach(function (detail) {
        detailFilter.append(`<option value="${detail}">${detail}</option>`);
      });
      console.log("Detail dropdown populated for MRD:", missionRowDetails); // Debugging
    }

    // Populate vehicle filter for selected division
    populateVehicleDropdown(selectedDivision);
  });

  // Populate Vehicle dropdown based on Division
  function populateVehicleDropdown(selectedDivision) {
    let vehicleFilter = $("#vehicleFilter");
    vehicleFilter.empty().append('<option value="">Select Vehicle</option>');

    if (selectedDivision) {
      let filteredVehicles = fleetData.filter(vehicle => vehicle.division === selectedDivision);
      console.log("Filtered vehicles for division:", selectedDivision, filteredVehicles); // Debugging

      // Get unique vehicle makes
      let uniqueMakes = [...new Set(filteredVehicles.map(vehicle => vehicle.make))];
      console.log("Unique makes for division:", selectedDivision, uniqueMakes); // Debugging

      vehicleFilter.append(uniqueMakes.map(make => `<option value="${make}">${make}</option>`));
    }

    displayAllVehicles();
  }

  // Display all vehicles in the selected division and detail
  function displayAllVehicles() {
    let selectedDivision = $("#divisionFilter").val();
    let selectedDetail = $("#detailFilter").val();
    let selectedMake = $("#vehicleFilter").val();

    console.log("Displaying all vehicles for division:", selectedDivision, "detail:", selectedDetail, "make:", selectedMake); // Debugging

    if (selectedDivision) {
      let filteredVehicles = fleetData.filter(vehicle => vehicle.division === selectedDivision);

      // If Mission Row Division is selected, filter by the selected detail
      if (selectedDivision === "Mission Row Division" && selectedDetail) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.assignedPurpose === selectedDetail);
        console.log("Filtered vehicles for detail:", selectedDetail, filteredVehicles); // Debugging
      }

      // If a specific make is selected, filter by the make
      if (selectedMake) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.make === selectedMake);
        console.log("Filtered vehicles for make:", selectedMake, filteredVehicles); // Debugging
      }

      displayVehicleDetails(filteredVehicles);
    } else {
      clearTable();
    }
  }

  // Display vehicle details in the table based on selection
  $('#vehicleFilter').on("change", function () {
    displayAllVehicles();
  });

  // The missing piece of the puzzle, listener for the detail filter too.
  $('#detailFilter').on("change", function () {
    displayAllVehicles();
  });

  // Display vehicle details in the table
  function displayVehicleDetails(vehicles) {
    let tableBody = $("#tableBody");
    tableBody.empty();

    console.log("Displaying vehicle details:", vehicles); // Debugging

    vehicles.forEach(vehicle => {
      let row = `
        <tr>
          <td>${vehicle.index || "N/A"}</td>
          <td>${vehicle.plate}</td>
          <td>${vehicle.make} ${vehicle.model}</td>
          <td>${vehicle.alpr === 1 ? "Yes" : "No"}</td>
          <td>${vehicle.ol || "N/A"}</td>
          <td>${vehicle.authorizedPersonnel || "N/A"}</td>
          <td>${vehicle.assignedPurpose || "N/A"}</td>
          <td>${vehicle.notes || "N/A"}</td>
        </tr>
      `;
      tableBody.append(row);
    });

    $("#tableContainer").show();
  }

  // Function to clear the table
  function clearTable() {
    $("#tableBody").empty();
    $("#tableContainer").hide();
  }

  // Load data on page load
  loadFleetData();
});
