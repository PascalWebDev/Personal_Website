window.onload = function (){
    let image = document.getElementById("discord");
    let src = image.src;

    function updateImage(){
        image.src = image.src.split("?")[0] + "?" + new Date().getTime() + "?idleMessage=Currently%20chillin...&bg=474d58&showDisplayName=true&hideBadges=true";
    }

    setInterval(updateImage, 500)
}