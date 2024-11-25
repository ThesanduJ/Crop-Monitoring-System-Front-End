const parent11 = document.querySelector("#observed-image");
const c = parent11.children[0];

const heightSize4=c.offsetHeight;
const parent12 = document.querySelector("#log-field");
parent12.style.height = heightSize4 + "px";

const parent13 = document.querySelector("#log-crop");
parent13.style.height = heightSize4 + "px";


const parent14 = document.querySelector("#log-staff");
parent14.style.height = heightSize4 + "px";

document.getElementById('logs').addEventListener('click', function() {
    document.getElementById('field-section').style.display = 'none';
    document.getElementById('crop-section').style.display = 'none';
    document.getElementById('staff-section').style.display = 'none';
    document.getElementById('log-section').style.display = 'block';
    document.getElementById('vehicle-section').style.display = 'none';
    document.getElementById('equipment-section').style.display = 'none';
    document.getElementById('user-section').style.display = 'none';
});