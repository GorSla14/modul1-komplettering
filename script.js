const stylePicker = document.getElementById("style-picker");
const menuBtn = document.getElementById("menu-btn");

stylePicker.addEventListener("change", changeColorNow);
menuBtn.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);

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

function toggleMenu() {
    const menuList = menuBtn.nextElementSibling;
    const currentDisplay = getComputedStyle(menuList).display;

    if (currentDisplay === "none") {
        menuList.style.display = "flex";
    } else {
        menuList.style.display = "none";
    }
}

function handleResize() {
    const menuList = menuBtn.nextElementSibling;

    if (window.innerWidth > 767) {
        menuList.style.display = "";
    } else {
        menuList.style.display = "none";
    }
}