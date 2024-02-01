document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateProgressBar, 1000);
});

function updateProgressBar() {
    const progressElement = document.getElementById("progress");
    const currentTimeElement = document.getElementById("currentTime");

    const now = new Date();
    const totalMinutesInDay = 24 * 60; // 24 hours * 60 minutes
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const percentage = (currentMinutes / totalMinutesInDay) * 100;

    progressElement.style.width = percentage + "%";

    // Calculate the position of currentTimeElement relative to progressElement
    const progressBarRect = progressElement.getBoundingClientRect();
    const currentTimeWidth = currentTimeElement.offsetWidth;
    
    // Adjust the left position to center along the right end of progress bar
    const currentTimeLeft = progressBarRect.left + progressBarRect.width - currentTimeWidth / 2;
    
    currentTimeElement.style.position = "absolute";
    currentTimeElement.style.top = progressBarRect.top - currentTimeElement.offsetHeight + "px";
    currentTimeElement.style.left = currentTimeLeft + "px";
    
    currentTimeElement.textContent = formatTime(now.getHours(), now.getMinutes());
}

function formatTime(hours, minutes) {
    // Format the time as "hh:mm"
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
}
