const datetimeElement = document.getElementById('timedate');

const dayjs = require('dayjs');

function updateDateTime() {
    const now = dayjs();
    const formattedDateTime = now.format('[The time is] dddd, MMMM D, YYYY HH:mm:ss');
    datetimeElement.textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000); 