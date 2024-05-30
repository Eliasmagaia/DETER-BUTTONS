document.getElementById('ligarBtn').addEventListener('click', function() {
    const lightStatus = document.getElementById('lightStatus');
    lightStatus.classList.remove('light-off');
    lightStatus.classList.add('light-on');
});

document.getElementById('desligarBtn').addEventListener('click', function() {
    const lightStatus = document.getElementById('lightStatus');
    lightStatus.classList.remove('light-on');
    lightStatus.classList.add('light-off');
});
