function toggle() {
    const toggleButton = document.getElementsByClassName("button")[0];

    const extraDiv = document.getElementById("extra");

    if (toggleButton.textContent === "More") {
        toggleButton.textContent = "Less";
        extraDiv.style.display = "block";
    } else if(toggleButton.textContent === "Less") {
        toggleButton.textContent = "More";
        extraDiv.style.display = "none";
    }
}