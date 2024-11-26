const parent4 = document.querySelector("#crop-common-name");
const z = parent4.children[0];

const heightSize2=z.offsetHeight;
const parent5 = document.querySelector("#crop-field");
parent5.style.height = heightSize2 + "px";

$('#crop').on('click', () => {
    $('#field-section').css('display', 'none');
    $('#crop-section').css('display', 'block');
    $('#staff-section').css('display', 'none');
    $('#log-section').css('display', 'none');
    $('#vehicle-section').css('display', 'none');
    $('#equipment-section').css('display', 'none');
    $('#user-section').css('display', 'none');
    $('#dashboard-section').css('display', 'none');
});
