document.getElementById('learn-more-btn').addEventListener('click', function() {
    document.getElementById('info-popup').classList.remove('hidden');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('info-popup').classList.add('hidden');
});
