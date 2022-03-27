const timerBlock = document.querySelector('.timer__time');
const deadline = '31 march 2022';
let interval;


const updateClock = () => {
    const date = new Date().getTime();
    const dateDeadline = new Date(deadline).getTime();
    const timeRemaining = (dateDeadline - date) / 1000;
    const hours = Math.floor(timeRemaining / 60 / 60);
    const hoursWDays = Math.floor(hours % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    let days = Math.floor(hours / 24);
   
    const fHours = hoursWDays < 10 ? '0' + hoursWDays : hoursWDays;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;
    let dateWord;
    
         if (days == 1) {
            dateWord = "день";
        } else if ((days > 1) && (days < 5)) {
            dateWord = "дня";
         } else if (days == 0) {
             dateWord = '';
             days = '';
         }
         else {
            dateWord = "дней";
        }
       
        
    
    timerBlock.textContent = `${days} ${dateWord} ${fHours}:${fMinutes}:${fSeconds}`;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = '00:00:00';
    }
}

updateClock();
interval = setInterval(updateClock, 500);




