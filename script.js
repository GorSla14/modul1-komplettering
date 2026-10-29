const stylePicker = document.getElementById("style-picker");

stylePicker.addEventListener("change", changeColorNow);

function changeColorNow() {
    const selectedColor = stylePicker.value;

    if (selectedColor === "standard") {
        document.body.style.backgroundColor = "#faf1f2";
    } else if (selectedColor === "blue") {
        document.body.style.backgroundColor = "#0000ff";
    } else if (selectedColor === "red") {
        document.body.style.backgroundColor = "#ff0000";
    } else if (selectedColor === "green") {
        document.body.style.backgroundColor = "#008000";
    }
}