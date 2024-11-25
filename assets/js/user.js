document.getElementById('view-account').addEventListener('click', function() {
    document.getElementById('field-section').style.display = 'none';
    document.getElementById('crop-section').style.display = 'none';
    document.getElementById('staff-section').style.display = 'none';
    document.getElementById('log-section').style.display = 'none';
    document.getElementById('vehicle-section').style.display = 'none';
    document.getElementById('equipment-section').style.display = 'none';
    document.getElementById('user-section').style.display = 'block';
    document.getElementById('dashboard-section').style.display = 'none';
});