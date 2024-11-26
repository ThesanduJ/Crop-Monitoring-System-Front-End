const parent17 = document.querySelector("#equipment-name");
const e = parent17.children[0];

const heightSize6=e.offsetHeight;
const parent18 = document.querySelector("#equipment-type");
parent18.style.height = heightSize6 + "px";

const parent19 = document.querySelector("#equipment-status");
parent19.style.height = heightSize6 + "px";

const parent20 = document.querySelector("#equipment-staff");
parent20.style.height = heightSize6 + "px";

const parent21 = document.querySelector("#equipment-field");
parent21.style.height = heightSize6 + "px";

$('#tools').on('click', () => {
    $('#field-section').css('display', 'none');
    $('#crop-section').css('display', 'none');
    $('#staff-section').css('display', 'none');
    $('#log-section').css('display', 'none');
    $('#vehicle-section').css('display', 'none');
    $('#equipment-section').css('display', 'block');
    $('#user-section').css('display', 'none');
    $('#dashboard-section').css('display', 'none');
});