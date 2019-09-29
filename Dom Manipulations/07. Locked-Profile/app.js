function lockedProfile() {

    const isProfileLocked = (profileDiv) => {
        const profileRadioButtons = profileDiv.querySelectorAll("input[type='radio']");
        const lockedRadioButton = profileRadioButtons[0];

        if (lockedRadioButton.checked) {
            return true;
        } else return false;
    }

    const revealMoreProfileInfo = (hiddenProfileInfoDiv) => {
        hiddenProfileInfoDiv.style.display = "block";
    }

    const hideMoreProfileInfo = (hiddenProfileInfoDiv) => {
        hiddenProfileInfoDiv.style.display = "none";
    }

    const changeButtonText = (button, text) => {
        button.textContent = text;
    }

    const isMoreInfoRevealed = (moreInfoDiv) => {
        if (moreInfoDiv.style.display === "block") {
            return true;
        } else return false;
    }

    const profileFunctionality = function(profile, event) {
        if (event.target.nodeName === "BUTTON") {
            const hiddenInfoDiv = profile.querySelector("div");
            const button = event.target;
            
            if (!isProfileLocked(profile) && !isMoreInfoRevealed(hiddenInfoDiv)) {
                revealMoreProfileInfo(hiddenInfoDiv);
                changeButtonText(button, "Hide it");
            } else if(!isProfileLocked(profile) && isMoreInfoRevealed(hiddenInfoDiv)){
                hideMoreProfileInfo(hiddenInfoDiv);
                changeButtonText(button, "Show more");
            }
        }
    };


    const profiles = document.querySelectorAll(".profile");
    for (const profile of profiles) {
        profile.addEventListener("click", (event) => profileFunctionality(profile, event));
    }
}