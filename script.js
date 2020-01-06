/*
Patient Form Js 

*/

let patients = [];
let id = 1;

//ACTIONS
//submit button action
document.getElementById("submitBtn").addEventListener("click", function() {
  if (validateForm(getFormData())) {
    patients.push(getFormData());
    id++;
    renderData();
  } else {
    alert("Please Control Fields");
  }
});

//delete button action

//FUNCTIONS
//get data from form field
function getFormData() {
  let patient = {};
  patient.id = id;
  patient.firstName = document.getElementById("firstName").value;
  patient.lastName = document.getElementById("lastName").value;
  patient.age = document.getElementById("age").value;
  patient.gender = document.getElementById("maleGender").checked
    ? "male"
    : "female";
  patient.city = document.getElementById("city").value;
  patient.addictions = [];
  if (document.getElementById("smoke").checked) {
    patient.addictions.push(document.getElementById("smoke").value);
  }
  if (document.getElementById("alcohol").checked) {
    patient.addictions.push(document.getElementById("alcohol").value);
  }
  if (document.getElementById("drug").checked) {
    patient.addictions.push(document.getElementById("drug").value);
  }
  return patient;
}
//control all form field is written or not
function validateForm(patient) {
  if (
    patient.firstName &&
    patient.lastName &&
    patient.age &&
    patient.gender &&
    patient.city &&
    patient.addictions.length > 0
  ) {
    return true;
  } else {
    return false;
  }
}
// list all patients
function renderData() {
  let i = 0;
  let render = "";
  for (let i = 0; i < patients.length; i++) {
    render =
      render +
      "<tr><td>" +
      patients[i].id +
      "</th>" +
      "<td>" +
      patients[i].firstName +
      "</td>" +
      "<td>" +
      patients[i].lastName +
      "</td>" +
      "<td>" +
      patients[i].age +
      "</td>" +
      "<td>" +
      patients[i].gender +
      "</td>" +
      "<td>" +
      patients[i].city +
      "</td>" +
      "<td>" +
      patients[i].addictions +
      "</td>" +
      "<td>" +
      `<button type="button" class="btn btn-danger" id='${patients[i].id}' onclick='deleteBtnFnc(this)'><i class="fa fa-trash"></i> Delete</button>` +
      "</td>" +
      "</tr>";
  }
  document.getElementById("patientList").innerHTML = render;
}

function deleteBtnFnc(element) {
  patients = patients.filter(item => {
    return item.id != element.id;
  });
  renderData();
}
