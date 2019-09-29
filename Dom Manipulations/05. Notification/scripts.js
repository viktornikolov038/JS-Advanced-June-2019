function notify(message) {
    const SELECTORS = {
        notificationDiv: "#notification",
    }

    const getNotificationDiv = () => 
        document.querySelector(SELECTORS.notificationDiv);

    const changeNotificationDivText = () => {
        const divToModify = getNotificationDiv();
        divToModify.textContent = message;
    }

    const showNotificationDiv = () => {
        const divToReveal = getNotificationDiv();
        divToReveal.style.display = "block";
    }

    const hideNotificationDiv = () => {
        const divToHide = getNotificationDiv();
        divToHide.style.display = "none";
    }

    const clearNotificationMessage = () => {
        const divToClear = getNotificationDiv();
        divToClear.textContent = "";
    }

    changeNotificationDivText();
    showNotificationDiv();
    window.setTimeout(hideNotificationDiv, 2000);
    window.setTimeout(clearNotificationMessage, 2001);
}