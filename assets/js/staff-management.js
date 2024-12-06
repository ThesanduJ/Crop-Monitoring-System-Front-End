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


$('#staff').on('click', () => {
    $('#field-section').css('display', 'none');
    $('#crop-section').css('display', 'none');
    $('#staff-section').css('display', 'block');
    $('#log-section').css('display', 'none');
    $('#vehicle-section').css('display', 'none');
    $('#equipment-section').css('display', 'none');
    $('#user-section').css('display', 'none');
    $('#dashboard-section').css('display', 'none');
});
//--------------------------------------------------------------------