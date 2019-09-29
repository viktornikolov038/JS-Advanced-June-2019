function addItem() {
    const newItemTextInput = document.getElementById("newItemText");
    const newItemValueInput = document.getElementById("newItemValue");

    const newItemText = newItemTextInput.value;
    const newItemValue = newItemValueInput.value;

    
    const newOption = document.createElement("option");
    newOption.setAttribute("value", newItemValue);
    newOption.textContent = newItemText;

    const selectMenu = document.getElementById("menu");
    selectMenu.appendChild(newOption);

    newItemTextInput.value = "";
    newItemValueInput.value = "";
}