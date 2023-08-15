const keyPressed = document.getElementById("keyPressed");
const eventKey = document.getElementById("eventKey");
const eventCode = document.getElementById("eventCode");
const eventLocation = document.getElementById("eventLocation");
const eventWhich = document.getElementById("eventWhich");
const infoArea = document.getElementById("infoArea");
const heading = document.getElementById("mainTitle");

document.addEventListener("keydown", (e) => {
    heading.textContent = `You have pressed:`
    infoArea.style.transition = "0.5s";
    infoArea.style.opacity = "1";
    keyPressed.textContent = e.key;
    eventKey.textContent= e.key;
    eventCode.textContent = e.code;
    eventWhich.textContent = e.which;
    if (e.location == 0){
        eventLocation.textContent = `${e.location} - General Keys`;
    } else if (e.location == 1){
        eventLocation.textContent = `${e.location} - Left-side modifier keys`;
    } else if (e.location == 2){
        eventLocation.textContent = `${e.location} - Right-side modifier keys`;
    } else {
        eventLocation.textContent = `${e.location} - Numpad`;
    }
       
        
});

