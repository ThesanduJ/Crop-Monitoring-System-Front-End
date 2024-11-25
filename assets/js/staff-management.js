const parent6 = document.querySelector("#joined-date");
const a = parent6.children[0];

const heightSize3=a.offsetHeight;
const parent7 = document.querySelector("#gender");
parent7.style.height = heightSize3 + "px";

const parent8 = document.querySelector("#role");
parent8.style.height = heightSize3 + "px";

const parent9 = document.querySelector("#staff-field");
parent9.style.height = heightSize3 + "px";

const parent10 = document.querySelector("#staff-vehicle");
parent10.style.height = heightSize3 + "px";
//--------------------------------------------------------------------


document.getElementById('staff').addEventListener('click', function() {
    document.getElementById('field-section').style.display = 'none';
    document.getElementById('crop-section').style.display = 'none';
    document.getElementById('staff-section').style.display = 'block';
    document.getElementById('log-section').style.display = 'none';
    document.getElementById('vehicle-section').style.display = 'none';
    document.getElementById('equipment-section').style.display = 'none';
    document.getElementById('user-section').style.display = 'none';
});
//--------------------------------------------------------------------