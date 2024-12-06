const parent15 = document.querySelector("#remarks");
const d = parent15.children[0];

const heightSize5=d.offsetHeight;
const parent16 = document.querySelector("#allocated-staff-member-details");
parent16.style.height = heightSize5 + "px";

$('#vehicle').on('click', () => {
    $('#field-section').css('display', 'none');
    $('#crop-section').css('display', 'none');
    $('#staff-section').css('display', 'none');
    $('#log-section').css('display', 'none');
    $('#vehicle-section').css('display', 'block');
    $('#equipment-section').css('display', 'none');
    $('#user-section').css('display', 'none');
    $('#dashboard-section').css('display', 'none');
});
