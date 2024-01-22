document.addEventListener('DOMContentLoaded', function() {
    var videoElement = document.getElementById('myVideo');
    var soundButton = document.getElementById('soundButton');
    var up=document.getElementById('up');
    var down=document.getElementById('down');
    up.style.display='none';

    if (videoElement && soundButton) {
        // Initial state: muted
        videoElement.muted = true;

        // Toggle mute state on button click
        soundButton.addEventListener('click', function() {
            videoElement.muted = !videoElement.muted;
            
            if( up.style.display=='none'){
                up.style.display='block';
                down.style.display='none';
            }
            else{
                up.style.display='none' 
                down.style.display='block';
            }
           
           
        });
    } else {
        console.error('Video element or sound button not found');
    }
});
