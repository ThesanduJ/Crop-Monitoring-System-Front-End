const parent15 = document.querySelector("#remarks");
const d = parent15.children[0];

const heightSize5=d.offsetHeight;
const parent16 = document.querySelector("#allocated-staff-member-details");
parent16.style.height = heightSize5 + "px";

document.getElementById('vehicle').addEventListener('click', function() {
    document.getElementById('field-section').style.display = 'none';
    document.getElementById('crop-section').style.display = 'none';
    document.getElementById('staff-section').style.display = 'none';
    document.getElementById('log-section').style.display = 'none';
    document.getElementById('vehicle-section').style.display = 'block';
    document.getElementById('equipment-section').style.display = 'none';
    document.getElementById('user-section').style.display = 'none';
});
