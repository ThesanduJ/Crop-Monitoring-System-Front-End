const parent4 = document.querySelector("#crop-common-name");
const z = parent4.children[0];

const heightSize2=z.offsetHeight;
const parent5 = document.querySelector("#crop-field");
parent5.style.height = heightSize2 + "px";

document.getElementById('crop').addEventListener('click', function() {
    document.getElementById('field-section').style.display = 'none';
    document.getElementById('crop-section').style.display = 'block';
    document.getElementById('staff-section').style.display = 'none';
    document.getElementById('log-section').style.display = 'none';
    document.getElementById('vehicle-section').style.display = 'none';
    document.getElementById('equipment-section').style.display = 'none';
    document.getElementById('user-section').style.display = 'none';
});
