const topMenu = document.querySelector("nav");
const hiddenElements = Array.from(document.querySelectorAll(".hidden"));
const logo = document.getElementById("logo")

function show() {
    hiddenElements.forEach(element => {
        element.style.display = "block";
        element.style.position = "absolute";
        element.style.top = "110px";
        element.style.transition = "top 0.5s";

    });
    logo.style = "position:relative; top: 170px; transition: 0.42s 0.06s";
}

function hide() {
    hiddenElements.forEach(element => {
        element.style.display = "block";
        element.style.position = "absolute";
        element.style.top = "-120px";

        element.style.transition = "top 0.5s";
    });
    logo.style = "position:relative; top: 0px; transition: 0.3s 0.01s";
}


topMenu.addEventListener("mouseover", show);
topMenu.addEventListener("mouseout", hide);