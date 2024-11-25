
const parent = document.querySelector("#field-location");
const x = parent.children[0];


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.value = "Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude;
    // x.classList.add("is-valid");
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

//------------------------get height size--------------------

const heightSize=x.offsetHeight;
const parent2 = document.querySelector("#field-crops");
parent2.style.height = heightSize + "px";


const parent3 = document.querySelector("#field-staff");
parent3.style.height = heightSize + "px";
//------------------------------------------------------------

document.getElementById('field').addEventListener('click', function() {
    document.getElementById('field-section').style.display = 'block';
    document.getElementById('crop-section').style.display = 'none';
    document.getElementById('staff-section').style.display = 'none';
    document.getElementById('log-section').style.display = 'none';
    document.getElementById('vehicle-section').style.display = 'none';
    document.getElementById('equipment-section').style.display = 'none';
    document.getElementById('user-section').style.display = 'none';
});
