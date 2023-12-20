const clockContainer = document.getElementById('clock');

const timeMessage = () => {
    const message = document.createElement('div');
    if (hours >= 0 && mins >= 1 && hours <= 7 && mins <= 0) {
        message.textContent = 'Vete a la cama y vuelve mañana.';
    }
    if (hours >= 7 && mins >= 1 && hours <= 12 && mins <= 0) {
        message.textContent = 'Prepárate y a empollar';
    }
    if (hours >= 12 && mins >= 1 && hours <= 14 && mins <= 0) {
        message.textContent = 'ültimo empujón y a comer';
    }
    if (hours >= 14 && mins >= 1 && hours <= 16 && mins <= 0) {
        message.textContent = 'Comida y a recargar';
    }
    if (hours >= 16 && mins >= 1 && hours <= 18 && mins <= 0) {
        message.textContent = 'Vamos a acabr el día';
    }
    if (hours >= 18 && mins >= 1 && hours <= 22 && mins <= 0) {
        message.textContent = `Repasa y vamos acabando, poco a poco`;
    }
    if (hours >= 22 && mins >= 1 && hours <= 0 && mins <= 0) {
        message.textContent = 'Cenita y a relajarse, venga va';
    }

    clockContainer.innerHTML = '';
    clockContainer.appendChild(message);
}
const showDate = () => {
    const date = new Date();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const clockHTML = `
    <div>${hours}:${mins}:${secs}</div>
    <div>${day}/${month}/${year}</div>
    `;
    clockContainer.innerHTML = clockHTML;
    //timeMessage();
};

showDate();
setInterval(showDate, 1000);