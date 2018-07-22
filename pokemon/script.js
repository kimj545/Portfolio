const icons = [
    "https://image.flaticon.com/icons/svg/189/189001.svg",
    "https://image.flaticon.com/icons/svg/188/188987.svg",
    "https://image.flaticon.com/icons/svg/188/188990.svg",
    "https://image.flaticon.com/icons/svg/188/188989.svg",
    "https://image.flaticon.com/icons/svg/188/188993.svg",
    "https://image.flaticon.com/icons/svg/189/189000.svg",
    "https://image.flaticon.com/icons/svg/188/188995.svg",
    "https://image.flaticon.com/icons/svg/188/188997.svg",
];
let input = document.querySelector("input");
let y1 = window.innerHeight - 100;
let y2 = 100;
let btn = document.querySelector("button");



icons.forEach(function (icon, i) {
    let img = document.createElement("img");
    img.src = icon;
    document.body.appendChild(img);

    let pokButton = document.createElement("button");
    document.body.appendChild(pokButton);

    img.style.top = 40 + "px";
    img.style.left = i * 60 + "px";
    img.speedY = (Math.random() + .3);

    img.move = function () {
        let y = parseFloat(this.style.top) + this.speedY;
        this.style.top = y + "px";

        if (y > y1) {
            img.speedY = -Math.abs(img.speedY);
        }
        if (y < y2) {
            img.speedY = Math.abs(img.speedY);
        }
    }
});

btn.addEventListener('click', function () {
    setInterval(function () {
        document.querySelectorAll("img").forEach(function (img) {
            img.move();
        })
    }, 1000 / 30)
});








