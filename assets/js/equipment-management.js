const parent17 = document.querySelector("#equipment-name");
const e = parent17.children[0];

const heightSize6=e.offsetHeight;
const parent18 = document.querySelector("#equipment-type");
parent18.style.height = heightSize6 + "px";

const parent19 = document.querySelector("#equipment-status");
parent19.style.height = heightSize6 + "px";

const parent20 = document.querySelector("#equipment-staff");
parent20.style.height = heightSize6 + "px";
//
const parent21 = document.querySelector("#equipment-field");
parent21.style.height = heightSize6 + "px";

document.getElementById('tools').addEventListener('click', function() {
    document.getElementById('field-section').style.display = 'none';
    document.getElementById('crop-section').style.display = 'none';
    document.getElementById('staff-section').style.display = 'none';
    document.getElementById('log-section').style.display = 'none';
    document.getElementById('vehicle-section').style.display = 'none';
    document.getElementById('equipment-section').style.display = 'block';
    document.getElementById('user-section').style.display = 'none';
});