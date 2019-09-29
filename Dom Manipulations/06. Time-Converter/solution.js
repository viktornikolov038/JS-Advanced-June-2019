function attachEventsListeners() {
    const daysButton = document.querySelector("#daysBtn");
    const hoursButton = document.querySelector("#hoursBtn");
    const minutesButton = document.querySelector("#minutesBtn");
    const secondsButton = document.querySelector("#secondsBtn");
    
    const getDaysField = () => document.querySelector("#days");
        
    const getHoursField = () => document.querySelector("#hours");

    const getMinutesField = () => document.querySelector("#minutes");

    const getSecondsField = () => document.querySelector("#seconds");

    const updateTimeFields = (days, hours, minutes, seconds) => {
        const daysField = getDaysField();
        const hoursField = getHoursField();
        const minutesField = getMinutesField();
        const secondsField = getSecondsField();

        daysField.value = days;
        hoursField.value = hours;
        minutesField.value = minutes;
        secondsField.value = seconds;
    }

    daysButton.addEventListener("click", function(){
        const days = getDaysField().value;
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;

        updateTimeFields(days, hours, minutes, seconds);
    });

    hoursButton.addEventListener("click", function(){
        const hours = getHoursField().value;
        const days = hours / 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;

        updateTimeFields(days, hours, minutes, seconds);
    });

    minutesButton.addEventListener("click", function(){
        const minutes = getMinutesField().value;
        const hours = minutes / 60;
        const days = hours / 24;
        const seconds = minutes * 60;

        updateTimeFields(days, hours, minutes, seconds);
    });

    secondsButton.addEventListener("click", function(){
        const seconds = getSecondsField().value;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        updateTimeFields(days, hours, minutes, seconds);
    });
}