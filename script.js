// script.js
function logout() {
  // Simulate logout by redirecting to login page
  window.location.href = "login.html";
}

function selectAppliance(applianceName) {
  // Display selected appliance and send notification (simulated)
  let selectedApplianceElement = document.getElementById("selected-appliance");
  selectedApplianceElement.innerHTML = `<h2>Selected Appliance: ${applianceName}</h2>`;

  // Simulate sending email notification
  sendNotificationEmail(applianceName);
}

function sendNotificationEmail(applianceName) {
  // Simulate sending email (in real application, this would be done server-side)
  console.log(`Email notification sent for ${applianceName}`);
}
