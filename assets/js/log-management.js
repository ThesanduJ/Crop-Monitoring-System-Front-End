const parent11 = document.querySelector("#observed-image");
const c = parent11.children[0];

const heightSize4=c.offsetHeight;
const parent12 = document.querySelector("#log-field");
parent12.style.height = heightSize4 + "px";

const parent13 = document.querySelector("#log-crop");
parent13.style.height = heightSize4 + "px";


const parent14 = document.querySelector("#log-staff");
parent14.style.height = heightSize4 + "px";

$('#logs').on('click', () => {
    $('#field-section').css('display', 'none');
    $('#crop-section').css('display', 'none');
    $('#staff-section').css('display', 'none');
    $('#log-section').css('display', 'block');
    $('#vehicle-section').css('display', 'none');
    $('#equipment-section').css('display', 'none');
    $('#user-section').css('display', 'none');
    $('#dashboard-section').css('display', 'none');
});