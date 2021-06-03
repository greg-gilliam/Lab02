const submitBtn = document.getElementById("submit-button")
const inputField = document.getElementById("input-field")
const middleSection = document.getElementById("middle-section")
const colorField = document.getElementById("colorField")
const topSection = document.getElementById("top-section")

submitBtn.addEventListener('click', ()=>{
    console.log("I am clicking the button");
    console.log(inputField.value);
    console.log(middleSection.textContent);
    middleSection.textContent = inputField.value;
    console.log(colorField.value);
    topSection.style.backgroundColor = colorField.value;
})
