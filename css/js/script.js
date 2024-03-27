document.addEventListener("DOMContentLoaded", function() {
    var beeLink = document.getElementById('beeLink');
    var beeImg = document.getElementById('beeImg');

    beeLink.addEventListener('click', function(event) {
        event.preventDefault();

        beeImg.style.display = "block";
        beeImg.style.left = "100%";

        beeImg.style.animation = 'none';

        setTimeout(function() {
            beeImg.style.animation = 'fly 10s linear forwards';
        }, 100);
    });
});
document.getElementById('headerTitle').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.play();
});