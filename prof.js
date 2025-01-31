function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTime = now.toUTCString();
    utcTimeElement.textContent = `Current UTC Time: ${utcTime}`;
}


updateTime();

setInterval(updateTime, 1000);